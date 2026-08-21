import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="pcard hard-shadow">
      <span className="badge badge-maroon pcard__tag">{project.tag}</span>
      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__subtitle">{project.subtitle}</p>
      <p className="pcard__headline">{project.headline}</p>
      <div className="pcard__stats">
        {project.heroStats.slice(0, 2).map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <span className="pcard__cta">View Project →</span>
    </Link>
  )
}
