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
        <img src={slide.image} alt={slide.title} loading="lazy" decoding="async" />
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

function OrgChartSlide({ slide }) {
  return (
    <>
      {slide.body && <p className="deck-slide__body">{slide.body}</p>}
      <div className="deck-orgchart">
        <div className="deck-orgchart__root card hard-shadow">
          <h4 className="deck-orgchart__root-label">{slide.root.label}</h4>
          {slide.root.note && <p className="deck-orgchart__root-note">{slide.root.note}</p>}
        </div>
        <div className="deck-orgchart__trunk" />
        <div className="deck-orgchart__branches">
          {slide.branches.map((b) => (
            <div className="deck-orgchart__branch card hard-shadow" key={b.label}>
              <h4 className="deck-orgchart__branch-label">{b.label}</h4>
              <ul className="deck-list">
                {b.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {slide.footnote && <p className="deck-slide__footnote">{slide.footnote}</p>}
    </>
  )
}

function Idef0Slide({ slide }) {
  return (
    <>
      {slide.body && <p className="deck-slide__body">{slide.body}</p>}
      <div className="deck-idef0">
        <div className="deck-idef0__controls">
          <span className="deck-idef0__zone-label">Controls</span>
          <div className="deck-idef0__pills">
            {slide.controls.map((c) => (
              <span className="badge badge-maroon" key={c}>{c}</span>
            ))}
          </div>
          <span className="deck-idef0__arrow deck-idef0__arrow--v">↓</span>
        </div>

        <div className="deck-idef0__row">
          <div className="deck-idef0__inputs">
            <span className="deck-idef0__zone-label">Inputs</span>
            <div className="deck-idef0__pills deck-idef0__pills--col">
              {slide.inputs.map((i) => (
                <span className="badge badge-gold" key={i}>{i}</span>
              ))}
            </div>
          </div>
          <span className="deck-idef0__arrow">→</span>

          <div className="deck-idef0__box hard-shadow">
            <span className="deck-idef0__code">{slide.code}</span>
            <span className="deck-idef0__fn">{slide.function}</span>
          </div>

          <span className="deck-idef0__arrow">→</span>
          <div className="deck-idef0__outputs">
            <span className="deck-idef0__zone-label">Outputs</span>
            <div className="deck-idef0__pills deck-idef0__pills--col">
              {slide.outputs.map((o) => (
                <span className="badge badge-good" key={o}>{o}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="deck-idef0__mechanisms">
          <span className="deck-idef0__arrow deck-idef0__arrow--v">↑</span>
          <span className="deck-idef0__zone-label">Mechanisms</span>
          <div className="deck-idef0__pills">
            {slide.mechanisms.map((m) => (
              <span className="badge badge-outline" key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      {slide.footnote && <p className="deck-slide__footnote">{slide.footnote}</p>}
    </>
  )
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

function Idef0ChainSlide({ slide }) {
  return (
    <>
      {slide.body && <p className="deck-slide__body">{slide.body}</p>}
      {slide.controls && slide.controls.length > 0 && (
        <div className="deck-idef0chain__controls">
          <span className="deck-idef0chain__row-label">Controls — apply across every step</span>
          <div className="deck-idef0chain__pills">
            {slide.controls.map((c) => (
              <span className="badge badge-maroon" key={c}>{c}</span>
            ))}
          </div>
        </div>
      )}
      <div className="deck-idef0chain">
        {slide.steps.map((s, i) => (
          <div className="deck-idef0chain__step" key={s.code}>
            <div className="deck-idef0chain__card hard-shadow">
              <div className="deck-idef0chain__head">
                <span className="deck-idef0chain__code">{s.code}</span>
                <h4 className="deck-idef0chain__title">{s.title}</h4>
              </div>
              {s.inputs && s.inputs.length > 0 && (
                <div className="deck-idef0chain__row">
                  <span className="deck-idef0chain__row-label">Inputs</span>
                  <div className="deck-idef0chain__pills">
                    {s.inputs.map((v) => (
                      <span className="badge badge-gold" key={v}>{v}</span>
                    ))}
                  </div>
                </div>
              )}
              {s.outputs && s.outputs.length > 0 && (
                <div className="deck-idef0chain__row">
                  <span className="deck-idef0chain__row-label">Outputs</span>
                  <div className="deck-idef0chain__pills">
                    {s.outputs.map((v) => (
                      <span className="badge badge-good" key={v}>{v}</span>
                    ))}
                  </div>
                </div>
              )}
              {s.mechanisms && s.mechanisms.length > 0 && (
                <div className="deck-idef0chain__row">
                  <span className="deck-idef0chain__row-label">Mechanisms</span>
                  <div className="deck-idef0chain__pills">
                    {s.mechanisms.map((v) => (
                      <span className="badge badge-outline" key={v}>{v}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {i < slide.steps.length - 1 && <span className="deck-idef0chain__arrow">→</span>}
          </div>
        ))}
      </div>
      {slide.footnote && <p className="deck-slide__footnote">{slide.footnote}</p>}
    </>
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
  orgchart: OrgChartSlide,
  idef0: Idef0Slide,
  idef0chain: Idef0ChainSlide,
}

const WIDE_TYPES = new Set(['idef0chain'])

export default function DeckSlide({ slide, index }) {
  const Renderer = renderers[slide.type] || TextSlide
  return (
    <section className="deck-slide">
      <div className={`container${WIDE_TYPES.has(slide.type) ? ' container--wide' : ''}`}>
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
