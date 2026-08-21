import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoTags } from '../data/seo'

// Marks every tag this component owns, so a route change can clear the
// previous route's tags without touching anything hand-written in index.html.
const MANAGED = 'data-seo'

/**
 * Keeps <head> in sync with the current route.
 *
 * On a prerendered first load the correct tags are already in the served
 * HTML — this re-applies the identical set, then takes over for every
 * client-side navigation after that.
 */
export default function Seo() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const { title, tags } = seoTags(pathname)

    document.title = title
    document.head.querySelectorAll(`[${MANAGED}]`).forEach((el) => el.remove())

    const fragment = document.createDocumentFragment()
    for (const tag of tags) {
      const el = document.createElement(tag.el)
      for (const [name, value] of Object.entries(tag.attrs)) el.setAttribute(name, value)
      if (tag.json) el.textContent = JSON.stringify(tag.json)
      el.setAttribute(MANAGED, '')
      fragment.appendChild(el)
    }
    document.head.appendChild(fragment)
  }, [pathname])

  return null
}
