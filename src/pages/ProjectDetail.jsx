import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import DeckSlide from '../components/DeckSlide'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <article>
      <div className="container pdeck-topnav">
        <Link to="/projects" className="btn btn-outline pdeck-topnav__btn">← All Projects</Link>
        <span className="pdeck-topnav__count">{currentIndex + 1}/{projects.length}</span>
        <div className="pdeck-topnav__pair">
          <Link to={`/projects/${prev.slug}`} className="btn btn-outline pdeck-topnav__btn" aria-label="Previous project">←</Link>
          <Link to={`/projects/${next.slug}`} className="btn btn-outline pdeck-topnav__btn" aria-label="Next project">→</Link>
        </div>
      </div>
      <section className="pdeck-hero stripes">
        <div className="pdeck-hero__inner container hard-shadow">
          <span className="badge badge-gold">{project.tag}</span>
          <h1 className="pdeck-hero__title">{project.title}</h1>
          <p className="pdeck-hero__subtitle">{project.subtitle}</p>
          <p className="pdeck-hero__headline">{project.headline}</p>
          <div className="pdeck-hero__meta">
            <span><strong>Role:</strong> {project.role}</span>
            <span><strong>Org:</strong> {project.company}</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <p className="pdeck-summary">{project.summary}</p>
        <div className="stat-grid">
          {project.heroStats.map((s) => (
            <div className="stat-tile" key={s.label}>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="pdeck-slides">
        {project.slides.map((slide, i) => (
          <DeckSlide slide={slide} index={i} key={slide.title} />
        ))}
      </div>

      <section className="section container pdeck-nav">
        <Link to={`/projects/${prev.slug}`} className="pdeck-nav__card hard-shadow pdeck-nav__card--prev">
          <span className="pdeck-nav__arrow">←</span>
          <span className="pdeck-nav__body">
            <span className="eyebrow">Prev Project</span>
            <span className="pdeck-nav__title">{prev.title}</span>
          </span>
        </Link>
        <Link to={`/projects/${next.slug}`} className="pdeck-nav__card hard-shadow pdeck-nav__card--next">
          <span className="pdeck-nav__body">
            <span className="eyebrow">Next Project</span>
            <span className="pdeck-nav__title">{next.title}</span>
          </span>
          <span className="pdeck-nav__arrow">→</span>
        </Link>
      </section>
    </article>
  )
}
