import './Certifications.css'

const CERTS = [
  { short: 'SSGB', name: 'Six Sigma', sub: 'Green Belt' },
  { short: 'ISO', name: 'ISO 9001', sub: 'Internal Auditor' },
  { short: 'IATF', name: 'IATF 16949', sub: 'Internal Auditor' },
]

const TICKS = Array.from({ length: 24 })

function Seal({ short }) {
  return (
    <svg className="cert-seal" viewBox="0 0 100 100" role="img" aria-hidden="true">
      <g className="cert-seal__ticks">
        {TICKS.map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="5"
            x2="50"
            y2="13"
            transform={`rotate(${(360 / TICKS.length) * i} 50 50)`}
          />
        ))}
      </g>
      <circle className="cert-seal__ring" cx="50" cy="50" r="40" />
      <circle className="cert-seal__disc" cx="50" cy="50" r="32" />
      <text className="cert-seal__text" x="50" y="52" textAnchor="middle">
        {short}
      </text>
    </svg>
  )
}

export default function Certifications() {
  return (
    <section className="section container certs">
      <span className="eyebrow">Credentials</span>
      <h2 className="section-title" style={{ marginBottom: 30 }}>Certifications</h2>
      <div className="certs__grid">
        {CERTS.map((c) => (
          <div className="certs__item card hard-shadow" key={c.name}>
            <Seal short={c.short} />
            <div>
              <h3 className="certs__name">{c.name}</h3>
              <p className="certs__sub">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="certs__note">PMP — in progress.</p>
    </section>
  )
}
