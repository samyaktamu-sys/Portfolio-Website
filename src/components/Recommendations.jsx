import { recommendations } from '../data/recommendations'
import './Recommendations.css'

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
}

export default function Recommendations() {
  return (
    <section className="section container">
      <span className="eyebrow">LinkedIn Recommendations</span>
      <h2 className="section-title" style={{ marginBottom: 30 }}>What People Say</h2>
      <div className="rec-grid">
        {recommendations.map((r) => (
          <figure className="rec-card card" key={r.name}>
            <span className="rec-card__quote-mark">&ldquo;</span>
            <blockquote>{r.quote}</blockquote>
            <figcaption>
              <span className="rec-card__avatar">{initials(r.name)}</span>
              <span className="rec-card__who">
                <strong>{r.name}</strong>
                <span className="rec-card__title">{r.title}</span>
                <span className="rec-card__meta">{r.relationship} &middot; {r.date}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
