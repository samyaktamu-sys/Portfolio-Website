import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import { seoTags } from './data/seo.js'

export { prerenderRoutes, buildSitemap, resolveMeta } from './data/seo.js'

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }
const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (c) => ESCAPES[c])

// Prevents a "</script>" inside any schema string from closing the block early.
const escapeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c')

/** Serializes the route's <head> tags, matching what <Seo> builds at runtime. */
export function renderHead(url) {
  const { title, tags } = seoTags(url)

  const lines = [`<title>${escapeHtml(title)}</title>`]

  for (const tag of tags) {
    const attrs = Object.entries(tag.attrs)
      .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
      .join(' ')

    lines.push(
      tag.json
        ? `<script ${attrs} data-seo>${escapeJson(tag.json)}</script>`
        : `<${tag.el} ${attrs} data-seo />`,
    )
  }

  return lines.map((line) => `    ${line}`).join('\n')
}

/** Renders the full app markup for a route, for hydration on the client. */
export function renderApp(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
