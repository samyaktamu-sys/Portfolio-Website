import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Projects() {
  useDocumentTitle('Case Studies — Samyak Jain')
  return (
    <section className="section container">
      <span className="eyebrow">Portfolio</span>
      <h1 className="section-title" style={{ marginBottom: 16 }}>Case Studies</h1>
      <p style={{ maxWidth: '68ch', marginBottom: 40, fontSize: '1.05rem' }}>
        Four projects spanning shop-floor SPC, cross-functional DFM screening, and
        graduate-level multivariate statistics — each one built out as a full case
        study below, not just a summary card.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </section>
  )
}
