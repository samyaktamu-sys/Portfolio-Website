import { projects, getProjectBySlug } from './projects'

// Change this (or set VITE_SITE_URL) if the site moves to a custom domain.
export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL || 'https://samyak-jain-portfolio-lake.vercel.app'
).replace(/\/$/, '')

export const AUTHOR = 'Samyak Jain'
export const SITE_NAME = 'Samyak Jain — Quality & Process Engineering'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg?v=2`
export const LINKEDIN_URL = 'https://www.linkedin.com/in/samyak-delhi'
export const EMAIL = 'samyak.tamu@gmail.com'

const abs = (path) => `${SITE_URL}${path === '/' ? '/' : path}`

/* ------------------------------------------------------------------ */
/* Page copy                                                           */
/* ------------------------------------------------------------------ */

const pages = {
  '/': {
    title: 'Samyak Jain — Quality & Process Engineer | SPC & DMAIC',
    description:
      'Quality & Process Engineer specializing in SPC, DMAIC, and multivariate process analytics — Cpk recovery, first-pass yield, and root cause analysis.',
    priority: '1.0',
  },
  '/about': {
    title: 'About Samyak Jain — Six Sigma Green Belt, MS IE Texas A&M',
    description:
      'ISO 9001 / IATF 16949 internal auditor and Six Sigma Green Belt, MS Industrial Engineering at Texas A&M. SPC, DMAIC, APQP/PPAP, and control plans.',
    priority: '0.8',
  },
  '/projects': {
    title: 'Projects — SPC, DMAIC & Process Engineering Case Studies',
    description:
      'Eight case studies in SPC, DMAIC, DFM and structural simulation, and multivariate analytics — yield recovery, Moldflow, roll-cage FEA, and PCA monitoring.',
    priority: '0.9',
  },
  '/contact': {
    title: 'Contact Samyak Jain — Quality & Process Engineer',
    description:
      'Get in touch with Samyak Jain about quality and process engineering roles, SPC system design, DFM screening, or turning a dataset into a control plan.',
    priority: '0.7',
  },
}

// Hand-written, keyword-front-loaded descriptions sized for search results
// (~155 chars). Falls back to a trimmed project summary if a slug is missing.
const projectDescriptions = {
  'fpy-spc-improvement':
    'DMAIC case study: pipe-bending first-pass yield from 80% to 99.4%, Cpk from 0.46 to 1.49, held by a closed-loop SPC system. $150K/yr of scrap removed.',
  'moldflow-dfm-feasibility':
    'Moldflow DFM study across 50+ injection-molded parts — six simulation checks for warpage, weld line, and cooling risk settled a cold vs. hot runner call.',
  'mspc-pca-monitoring':
    'Multivariate SPC case study: PCA reduced 209 correlated process variables to 24 principal components and a 494-sample in-control baseline for T² monitoring.',
  'ml-process-analytics':
    'Statistical learning case study: Lasso vs. Random Forest vs. XGBoost across 151 predictors, ranked by LOOCV and AIC/BIC, then reversed by the test set.',
  'stonewall-systems-engineering':
    "Systems engineering case study: designing a manufacturer's organization with IDEF0, value stream mapping, a Balanced Scorecard, and the Viable System Model.",
  'beer-game-bullwhip':
    'Beer Distribution Game case study on the bullwhip effect — how a 523-unit demand blip became 1,000-unit order swings across four supply chain echelons.',
  'airline-passenger-forecasting':
    'Time series forecasting case study: five methods compared on the Box-Jenkins airline series, cutting MAPE from 12.06% to 4.76% with a seasonal-trend model.',
  'baja-sae-brake-rollcage':
    "Undergraduate BAJA SAE case study: hydraulic brake system design in SolidWorks and Ansys roll-cage FEA against the rulebook's impact and rollover load cases.",
}

function trim(text, max = 158) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const PERSON_ID = `${SITE_URL}/#person`

const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AUTHOR,
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: `mailto:${EMAIL}`,
  jobTitle: 'Quality & Process Engineer',
  description:
    'Quality & Process Engineer specializing in statistical process control, DMAIC problem solving, and multivariate process analytics, with ISO 9001 and IATF 16949 internal-auditor credentials.',
  // Add any additional public profiles (GitHub, ORCID, personal domain) here —
  // more verified sameAs links strengthen entity disambiguation in search.
  sameAs: [LINKEDIN_URL],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'College Station',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'College Station', addressRegion: 'TX', addressCountry: 'US' },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Quality & Process Engineer',
    occupationalCategory: '17-2112.00', // O*NET-SOC — Industrial Engineers
    skills:
      'Statistical process control, DMAIC, ISO 9001 and IATF 16949 internal auditing, APQP, PPAP, manufacturing control plans, DFMEA/PFMEA, GD&T, process capability analysis, discrete-event simulation.',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Texas A&M University', sameAs: 'https://www.tamu.edu/' },
    { '@type': 'CollegeOrUniversity', name: 'Narsee Monjee Institute of Management Studies' },
    { '@type': 'CollegeOrUniversity', name: 'Guru Gobind Singh Indraprastha University' },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      name: 'Six Sigma Green Belt',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      name: 'ISO 9001 Internal Auditor',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      name: 'IATF 16949 Internal Auditor',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: "Master's degree",
      name: 'MS, Industrial Engineering',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Texas A&M University' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: "Master's degree",
      name: 'MBA',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Narsee Monjee Institute of Management Studies' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: "Bachelor's degree",
      name: 'BS, Mechanical & Automation Engineering',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Guru Gobind Singh Indraprastha University' },
    },
  ],
  knowsAbout: [
    'Statistical Process Control',
    'DMAIC',
    'Six Sigma',
    'Quality Management Systems (ISO 9001)',
    'IATF 16949',
    'Internal Quality Auditing',
    'APQP',
    'PPAP',
    'Manufacturing Control Plans',
    'FMEA (DFMEA / PFMEA)',
    'GD&T',
    'Root Cause Analysis',
    'Process Capability (Cpk)',
    'First-Pass Yield Improvement',
    'Multivariate Statistical Process Control',
    'Design for Manufacturability',
    'Discrete-Event Simulation',
    'Finite Element Analysis',
    'Lean Manufacturing',
  ],
}

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'en-US',
  publisher: { '@id': PERSON_ID },
}

function breadcrumb(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

function projectSchema(project) {
  return {
    '@type': 'Article',
    '@id': `${abs(`/projects/${project.slug}`)}#article`,
    headline: project.title,
    alternativeHeadline: project.headline,
    description: projectDescriptions[project.slug] || trim(project.summary),
    abstract: project.summary,
    url: abs(`/projects/${project.slug}`),
    mainEntityOfPage: abs(`/projects/${project.slug}`),
    image: OG_IMAGE,
    inLanguage: 'en-US',
    articleSection: project.tag.split(' / ')[0],
    ...(project.datePublished && {
      datePublished: project.datePublished,
      dateModified: project.datePublished,
    }),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: project.tag.split(' / ').map((t) => ({ '@type': 'Thing', name: t })),
    keywords: project.tag.split(' / ').join(', '),
  }
}

/* ------------------------------------------------------------------ */
/* Route resolution                                                    */
/* ------------------------------------------------------------------ */

/**
 * Everything the <head> needs for a given pathname. Used by both the
 * build-time prerenderer and the client-side <Seo> component, so the
 * markup served to crawlers and the markup after client navigation
 * can never drift apart.
 */
export function resolveMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : '/'

  if (pages[path]) {
    const page = pages[path]
    const graph = [personSchema, websiteSchema]

    if (path === '/') {
      graph.push({
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
      })
    } else if (path === '/projects') {
      graph.push(
        breadcrumb([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }]),
        {
          '@type': 'CollectionPage',
          '@id': `${abs('/projects')}#webpage`,
          url: abs('/projects'),
          name: page.title,
          description: page.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: projects.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: abs(`/projects/${p.slug}`),
              name: p.title,
            })),
          },
        },
      )
    } else {
      graph.push(
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: path === '/about' ? 'About' : 'Contact', path },
        ]),
        {
          '@type': path === '/about' ? 'AboutPage' : 'ContactPage',
          '@id': `${abs(path)}#webpage`,
          url: abs(path),
          name: page.title,
          description: page.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': PERSON_ID },
        },
      )
    }

    return { path, title: page.title, description: page.description, graph, index: true }
  }

  const projectMatch = path.match(/^\/projects\/([\w-]+)$/)
  const project = projectMatch && getProjectBySlug(projectMatch[1])

  if (project) {
    return {
      path,
      title: `${project.title} — ${AUTHOR}`,
      description: projectDescriptions[project.slug] || trim(project.summary),
      articleSection: project.tag.split(' / ')[0],
      datePublished: project.datePublished,
      graph: [
        personSchema,
        websiteSchema,
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.title, path },
        ]),
        projectSchema(project),
      ],
      index: true,
    }
  }

  return {
    path,
    title: '404 — Page Not Found | Samyak Jain',
    description: 'This page fell outside the spec limits.',
    graph: [],
    index: false,
  }
}

/* ------------------------------------------------------------------ */
/* Tag descriptors — rendered to HTML on the server, to DOM nodes on   */
/* the client.                                                         */
/* ------------------------------------------------------------------ */

export function seoTags(pathname) {
  const meta = resolveMeta(pathname)
  const canonical = abs(meta.path)

  const tags = [
    { el: 'meta', attrs: { name: 'description', content: meta.description } },
    { el: 'link', attrs: { rel: 'canonical', href: canonical } },
    {
      el: 'meta',
      attrs: {
        name: 'robots',
        content: meta.index
          ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          : 'noindex, follow',
      },
    },
    { el: 'meta', attrs: { name: 'author', content: AUTHOR } },

    { el: 'meta', attrs: { property: 'og:type', content: meta.path.startsWith('/projects/') ? 'article' : 'website' } },
    { el: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { el: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
    { el: 'meta', attrs: { property: 'og:url', content: canonical } },
    { el: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { el: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { el: 'meta', attrs: { property: 'og:image', content: OG_IMAGE } },
    { el: 'meta', attrs: { property: 'og:image:type', content: 'image/jpeg' } },
    { el: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { el: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { el: 'meta', attrs: { property: 'og:image:alt', content: `${AUTHOR} — Quality & Process Engineering portfolio` } },

    { el: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { el: 'meta', attrs: { name: 'twitter:title', content: meta.title } },
    { el: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
    { el: 'meta', attrs: { name: 'twitter:image', content: OG_IMAGE } },
    { el: 'meta', attrs: { name: 'twitter:image:alt', content: `${AUTHOR} — Quality & Process Engineering portfolio` } },
  ]

  // Article-namespace tags for the project case studies (og:type is already
  // 'article' for these paths).
  if (meta.path.startsWith('/projects/')) {
    tags.push(
      { el: 'meta', attrs: { property: 'article:author', content: AUTHOR } },
      { el: 'meta', attrs: { property: 'article:section', content: meta.articleSection || 'Case Study' } },
    )
    if (meta.datePublished) {
      tags.push(
        { el: 'meta', attrs: { property: 'article:published_time', content: meta.datePublished } },
        { el: 'meta', attrs: { property: 'article:modified_time', content: meta.datePublished } },
      )
    }
  }

  if (meta.graph.length) {
    tags.push({
      el: 'script',
      attrs: { type: 'application/ld+json' },
      json: { '@context': 'https://schema.org', '@graph': meta.graph },
    })
  }

  return { title: meta.title, tags }
}

/* ------------------------------------------------------------------ */
/* Build-time helpers                                                  */
/* ------------------------------------------------------------------ */

export const prerenderRoutes = [
  ...Object.keys(pages).map((path) => ({ path, priority: pages[path].priority })),
  ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: '0.7' })),
]

export function buildSitemap(lastmod = new Date().toISOString().slice(0, 10)) {
  const urls = prerenderRoutes
    .map(
      ({ path, priority }) =>
        `  <url>\n    <loc>${abs(path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}
