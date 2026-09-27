import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const artworkPath = new URL('../src/data/artworks.js', import.meta.url)
const source = await readFile(artworkPath, 'utf8')
const works = []
const cacheMode = process.argv.includes('--cache')

for (const match of source.matchAll(/(?:work|generated)\(\{([\s\S]*?)\n  \}\),/g)) {
  const block = match[1]
  const id = block.match(/\bid:\s*'([^']+)'/)?.[1]
  const title = block.match(/\btitle:\s*'([^']+)'/)?.[1]
  const file = block.match(/\bfile:\s*(["'])(.*?)\1/)?.[2]
  if (file) works.push({ id, title, file })
}

if (works.length === 0) {
  console.error('No artwork image files found. Check the artwork data format.')
  process.exit(1)
}

const api = new URL('https://commons.wikimedia.org/w/api.php')
api.search = new URLSearchParams({
  action: 'query',
  format: 'json',
  prop: 'imageinfo',
  iiprop: 'url',
  iiurlwidth: '760',
  titles: works.map(({ file }) => `File:${file}`).join('|'),
}).toString()

const response = await fetch(api, {
  headers: { 'User-Agent': 'BahaySiningImageAudit/1.0 (catalog link validation)' },
})
if (!response.ok) {
  console.error(`Wikimedia Commons API returned HTTP ${response.status}`)
  process.exit(1)
}

const result = await response.json()
const pages = Object.values(result.query?.pages ?? {})
const pageByTitle = new Map(pages.map((page) => [normalize(page.title), page]))
const missing = []

for (let start = 0; start < works.length; start += 2) {
  const batch = works.slice(start, start + 2)
  const checks = await Promise.all(batch.map(async (work) => {
    const page = pageByTitle.get(normalize(`File:${work.file}`))
    const imageUrl = page?.imageinfo?.[0]?.thumburl
    if (!imageUrl) return { work, ok: false, detail: 'no thumbnail URL' }
    for (let attempt = 0; attempt < 4; attempt += 1) {
      try {
        const imageResponse = await fetch(imageUrl, {
          method: cacheMode ? 'GET' : 'HEAD',
          headers: { 'User-Agent': 'BahaySiningImageAudit/1.0 (catalog link validation)' },
        })
        const contentType = imageResponse.headers.get('content-type') ?? 'no content type'
        if ([429, 503].includes(imageResponse.status) && attempt < 3) {
          await delay(1000 * (attempt + 1))
          continue
        }
        const bytes = cacheMode && imageResponse.ok ? new Uint8Array(await imageResponse.arrayBuffer()) : null
        const expectedType = work.file.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'
        const validImage = imageResponse.ok && contentType.startsWith('image/') && contentType.split(';')[0] === expectedType
        return {
          work,
          ok: validImage,
          bytes: validImage ? bytes : null,
          detail: `HTTP ${imageResponse.status}; ${contentType}`,
        }
      } catch (error) {
        if (attempt === 3) return { work, ok: false, detail: error.message }
        await delay(1000 * (attempt + 1))
      }
    }
  }))

  for (const { work, ok, detail, bytes } of checks) {
    console.log(`${ok ? 'OK' : 'MISSING'}  ${work.title ?? work.id} — ${work.file}${detail && !ok ? ` (${detail})` : ''}`)
    if (!ok) missing.push(work)
    if (ok && cacheMode) {
      const extension = work.file.split('.').pop().toLowerCase()
      const output = fileURLToPath(new URL(`../public/images/artworks/${work.id}.${extension}`, import.meta.url))
      await mkdir(dirname(output), { recursive: true })
      await writeFile(output, bytes)
      console.log(`    cached → public/images/artworks/${work.id}.${extension}`)
    }
  }
  if (start + batch.length < works.length) await delay(350)
}

console.log(`\nChecked ${works.length} artwork images: ${works.length - missing.length} found, ${missing.length} missing.`)
if (missing.length) process.exitCode = 1

function normalize(value) {
  return value.replaceAll('_', ' ').trim().normalize('NFC').toLocaleLowerCase()
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
