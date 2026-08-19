import './DeckSlide.css'

function StatsSlide({ slide }) {
  return (
    <>
      <p className="deck-slide__body">{slide.body}</p>
      <div className="stat-grid">
        {slide.stats.map((s) => (
          <div className="stat-tile" key={s.label}>
            <div className="value">{s.value}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function TwoColSlide({ slide }) {
  return (
    <div className="deck-twocol">
      <div className="card">
        <h4 className="deck-twocol__heading">{slide.left.heading}</h4>
        <ul className="deck-list">
          {slide.left.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h4 className="deck-twocol__heading">{slide.right.heading}</h4>
        <ul className="deck-list">
          {slide.right.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LoopDiagram({ diagram }) {
  const n = diagram.length
  const step = 360 / n
  return (
    <div className="deck-loop">
      <div className="deck-loop__ring" />
      <div className="deck-loop__center">
        <span className="deck-loop__center-icon">⟲</span>
        <span className="deck-loop__center-label">Closed Loop</span>
      </div>
      {diagram.map((s, i) => {
        const angle = -90 + i * step
        return (
          <div className="deck-loop__node-wrap" style={{ '--angle': `${angle}deg` }} key={s.label}>
            <div className={`deck-loop__node deck-flow__node--${s.state}`}>
              <span className="deck-loop__num">{i + 1}</span>
              <span className="deck-flow__label">{s.label}</span>
              <span className="deck-flow__note">{s.note}</span>
            </div>
          </div>
        )
      })}
      {diagram.map((s, i) => {
        const angle = -90 + i * step + step / 2
        return (
          <div className="deck-loop__arrow-wrap" style={{ '--angle': `${angle}deg` }} key={`arrow-${s.label}`}>
            <span className="deck-loop__arrow">➤</span>
          </div>
        )
      })}
    </div>
  )
}

function DiagramSlide({ slide }) {
  return (
    <>
      <p className="deck-slide__body">{slide.body}</p>
      {slide.loop ? (
        <LoopDiagram diagram={slide.diagram} />
      ) : (
        <div className="deck-flow">
          {slide.diagram.map((step, i) => (
            <div className="deck-flow__step" key={step.label}>
              <div className={`deck-flow__node deck-flow__node--${step.state}`}>
                <span className="deck-flow__label">{step.label}</span>
                <span className="deck-flow__note">{step.note}</span>
              </div>
              {i < slide.diagram.length - 1 && <span className="deck-flow__arrow">→</span>}
            </div>
          ))}
        </div>
      )}
      {slide.footnote && <p className="deck-slide__footnote">{slide.footnote}</p>}
    </>
  )
}

function ImageSlide({ slide }) {
  return (
    <div className="deck-image">
      <div className="deck-image__frame hard-shadow">
        <img src={slide.image} alt={slide.title} />
      </div>
      <p className="deck-slide__footnote">{slide.caption}</p>
    </div>
  )
}

function ChecklistSlide({ slide }) {
  return (
    <>
      <p className="deck-slide__body">{slide.body}</p>
      <div className="deck-checklist">
        {slide.items.map((item) => (
          <div className="deck-checklist__item card" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function TextSlide({ slide }) {
  return <p className="deck-slide__body deck-slide__body--lead">{slide.body}</p>
}

function CloseSlide({ slide }) {
  return (
    <ul className="deck-close">
      {slide.items.map((item, i) => (
        <li key={item}>
          <span className="deck-close__num">{String(i + 1).padStart(2, '0')}</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

const renderers = {
  stats: StatsSlide,
  twocol: TwoColSlide,
  diagram: DiagramSlide,
  image: ImageSlide,
  text: TextSlide,
  close: CloseSlide,
  checklist: ChecklistSlide,
}

export default function DeckSlide({ slide, index }) {
  const Renderer = renderers[slide.type] || TextSlide
  return (
    <section className="deck-slide">
      <div className="container">
        <div className="deck-slide__head">
          <span className="deck-slide__index">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <span className="eyebrow">{slide.eyebrow}</span>
            <h2 className="deck-slide__title">{slide.title}</h2>
          </div>
        </div>
        <Renderer slide={slide} />
      </div>
    </section>
  )
}
