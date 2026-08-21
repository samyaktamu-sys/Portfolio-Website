import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import professionalPhoto from '../assets/photos/professional.jpg'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section container">
      <div className="projects-hero">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h1 className="section-title" style={{ marginBottom: 16 }}>Projects</h1>
          <p style={{ maxWidth: '68ch', fontSize: '1.05rem' }}>
            Projects spanning shop-floor SPC, cross-functional DFM screening, and
            graduate-level multivariate statistics — each one built out as a full case
            study below, not just a summary card.
          </p>
        </div>
        <div className="projects-hero__photo hard-shadow-gold">
          <div className="comic-burst projects-hero__burst" aria-hidden="true" />
          <div className="projects-hero__photo-inner">
            <img src={professionalPhoto} alt="Samyak Jain" />
          </div>
          <div className="quip-note projects-hero__quip">Got a Green Belt without breaking any bricks.</div>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </section>
  )
}
