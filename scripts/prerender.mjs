/**
 * Static prerender for the SPA.
 *
 * Vite alone ships one HTML shell with an empty <div id="root">, so every
 * route serves identical <head> tags and no body copy — crawlers, link
 * unfurlers, and social previews all see the same generic page.
 *
 * This builds the app twice (browser + SSR), renders each known route to
 * HTML, and writes a real file per URL with that route's own title,
 * description, canonical, Open Graph tags, and JSON-LD baked in. React
 * hydrates the markup on load, so behaviour is unchanged.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, '.ssr-build')

const SEO_BLOCK = /[ \t]*<!--seo:start-->[\s\S]*?<!--seo:end-->/
const ROOT_DIV = '<div id="root"></div>'

async function main() {
  console.log('\n▸ building browser bundle')
  await build({ logLevel: 'warn' })

  console.log('▸ building SSR bundle')
  await build({
    logLevel: 'warn',
    build: { ssr: 'src/entry-server.jsx', outDir: '.ssr-build', emptyOutDir: true },
  })

  const entry = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
  const { renderApp, renderHead, resolveMeta, prerenderRoutes, buildSitemap } = entry

  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')

  if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
    throw new Error('index.html is missing the <!--seo:start--> block or the #root div')
  }

  console.log('▸ prerendering routes')
  const referencedAssets = new Set()
  const warnings = []

  for (const { path: route } of prerenderRoutes) {
    // Google truncates roughly past these lengths; over-long copy just gets
    // an ellipsis in the result, so flag it rather than shipping it blind.
    const { title, description } = resolveMeta(route)
    if (title.length > 62) warnings.push(`${route} — title is ${title.length} chars (max 62)`)
    if (description.length > 160) warnings.push(`${route} — description is ${description.length} chars (max 160)`)

    const appHtml = renderApp(route)
    const headHtml = renderHead(route)

    const html = template
      .replace(SEO_BLOCK, headHtml)
      .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`)

    for (const [, asset] of appHtml.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
      referencedAssets.add(asset)
    }

    const outFile =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.slice(1), 'index.html')

    await fs.mkdir(path.dirname(outFile), { recursive: true })
    await fs.writeFile(outFile, html)
    console.log(`  ${route.padEnd(38)} → ${path.relative(root, outFile)}`)
  }

  // The SSR and browser builds hash assets independently. Identical inputs
  // normally produce identical names, but a mismatch would silently serve
  // broken images, so fail the build instead of shipping it.
  const missing = []
  for (const asset of referencedAssets) {
    try {
      await fs.access(path.join(distDir, asset))
    } catch {
      missing.push(asset)
    }
  }
  if (missing.length) {
    throw new Error(
      `Prerendered HTML references ${missing.length} asset(s) missing from dist/:\n  ${missing.join('\n  ')}`,
    )
  }

  if (warnings.length) {
    console.warn(`\n⚠ ${warnings.length} SEO copy warning(s):`)
    for (const warning of warnings) console.warn(`  ${warning}`)
  }

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap())
  console.log(`\n✓ ${prerenderRoutes.length} routes prerendered, ${referencedAssets.size} assets verified, sitemap.xml written\n`)

  await fs.rm(ssrDir, { recursive: true, force: true })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
