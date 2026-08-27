import secondaryPhoto from '../assets/photos/secondary.jpg'
import Recommendations from '../components/Recommendations'
import tamuLogo from '../assets/logos/tamu.png'
import nmimsLogo from '../assets/logos/nmims.png'
import ggsipuLogo from '../assets/logos/ggsipu.png'
import './About.css'

const education = [
  { school: 'Texas A&M University, College Station, TX', degree: 'MS, Industrial Engineering', date: '05/2026', logo: tamuLogo },
  { school: 'Narsee Monjee Institute of Management Studies, India', degree: 'MBA', date: '02/2024', logo: nmimsLogo },
  { school: 'Guru Gobind Singh Indraprastha University, India', degree: 'BS, Mechanical & Automation Engineering', date: '05/2021', logo: ggsipuLogo },
]

const experience = [
  {
    role: 'Lab Technician — Chemistry Department',
    org: 'Texas A&M University, College Station, TX',
    date: '01/2025 – 05/2026',
    bullets: [
      'Supported fume hood installation/maintenance, verifying airflow and safety performance after commissioning.',
      'Operated glovebox systems in ISO-classified controlled environments, enforcing contamination-control protocols.',
      'Led a materials safety upgrade replacing mercury bubblers with sand-based alternatives, zero disruption to ops.',
      'Ran routine inspections, preventive maintenance, and documentation for controlled-environment equipment to hold departmental compliance.',
    ],
  },
  {
    role: 'Senior Engineer',
    org: 'Utility Power Systems, Delhi, India',
    date: '01/2023 – 07/2024',
    bullets: [
      'Recovered process capability (Cpk 0.46 → 1.49) on the pipe-bending line via DMAIC and closed-loop SPC, lifting FPY from 80% to 99.4% and eliminating ~$150K/yr in scrap.',
      'Implemented ISO 9001 Clause 8–10 controls during a facility migration — built the manufacturing control plans and internal audit schedule (inspection points, reaction plans, audit frequency) with ops and quality on the floor.',
      'Redesigned workstations with OSHA-aligned machine guarding, ergonomics, and PPE/hazard communication as part of a motion study, cutting end-to-end lead time ~20%.',
      'Planned plant and line layouts in AutoCAD and built a FlexSim discrete-event model with PFMEA-informed downtime modes for bottleneck and capacity analysis.',
      'Wrote SOPs and standard work for welding, blasting, galvanization, and powder coating under ISO 9001 Clause 8.5; applied GD&T to review fabrication drawings.',
      'Built Power BI dashboards for FPY, OEE, inventory, defects, and on-time delivery.',
    ],
  },
  {
    role: 'Senior Engineer',
    org: 'Uno Minda Limited, Haryana, India',
    date: '01/2022 – 01/2023',
    bullets: [
      'Supported APQP/PPAP launch of high-volume motorcycle switch assemblies for Yamaha, Suzuki, and Piaggio, coordinating design, manufacturing, quality, logistics, and suppliers.',
      'Designed a pilot production line to IATF 16949 process requirements, translating design specs into repeatable workstation setups and cutting operator cycle time ~30%.',
      'Reviewed 25+ assembly lines for IATF 16949 conformance ahead of certification, and managed ECN and SAP configuration to keep BOMs and routings aligned with design intent.',
      'Ran DFMEA/PFMEA across 8 designs, catching 20+ potential failure modes and cutting design-stage issues ~30% before tooling release.',
      'Used Moldflow and DFM reviews on 100+ injection-molded components to catch flow, cooling, and warpage risk pre-tooling.',
      'Designed wire-harness routing and layout for the switch assemblies — connector and terminal selection, crimp specification, and end-of-line continuity and pull-force testing.',
      'Executed 37 Kaizen and Lean initiatives, contributing to a 4–5% cost reduction in targeted assemblies.',
    ],
  },
  {
    role: 'Intern',
    org: 'Boiler Components Mfg. Co., Delhi, India',
    date: '03/2020 – 08/2020',
    bullets: [
      '2D drafting of new consignments on AutoCAD; oversaw fabrication execution per drawing.',
      'Foundational grounding in Lean Manufacturing and Just-In-Time (JIT) technique.',
    ],
  },
]

const skills = [
  { group: 'Standards & Compliance', items: ['ISO 9001 Internal Auditor', 'IATF 16949 Internal Auditor', 'OSHA-aligned machine guarding', 'Ergonomics', 'PPE / hazard communication'] },
  { group: 'Quality & Problem Solving', items: ['APQP', 'PPAP', 'Manufacturing control plans', 'Internal audit scheduling', 'DFMEA', 'PFMEA', 'DMAIC', 'SPC', 'Root-cause analysis', 'GD&T', 'Cpk / FPY improvement'] },
  { group: 'Continuous Improvement', items: ['Six Sigma Green Belt', 'PMP (in progress)', 'Kaizen', 'Lean Manufacturing', 'PDCA', 'Just-in-Time'] },
  { group: 'Industrial Engineering', items: ['Line/plant layouts', 'Capacity modeling', 'Time studies', 'Line balancing', 'Workstation design', 'PFEP', 'Material-flow planning'] },
  { group: 'Simulation & Analytics', items: ['FlexSim', 'JaamSim', 'Power BI', 'Excel (advanced)', 'Python', 'SQL', 'Minitab', 'Tableau'] },
  { group: 'Systems & Design', items: ['SolidWorks', 'AutoCAD', 'CATIA', 'Ansys', 'SAP', 'Moldflow'] },
  { group: 'Manufacturing Processes', items: ['High-volume assembly', 'Wire-harness assembly', 'Welding', 'Bending / forming', 'Blasting', 'Galvanization', 'Powder coating', 'Injection molding', '3D-printed fixtures'] },
]

export default function About() {
  return (
    <>
      <section className="section container about-hero">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="section-title" style={{ marginBottom: 18 }}>
            Quality engineering, not vibes.
          </h1>
          <p className="about-hero__lead">
            I'm a Quality &amp; Process Engineer with an MS in Industrial Engineering
            from Texas A&M. Six Sigma Green Belt and ISO 9001 / IATF 16949 internal
            auditor, three-plus years turning shaky manufacturing processes into ones
            that police themselves — SPC dashboards, DMAIC investigations, APQP/PPAP
            launches, Moldflow DFM screens, and the occasional multivariate model when
            a spreadsheet isn't rigorous enough.
          </p>
        </div>
        <div className="about-hero__photo hard-shadow-gold">
          <div className="comic-burst comic-burst--maroon about-hero__burst" aria-hidden="true" />
          <img src={secondaryPhoto} alt="Samyak Jain at Texas A&M" />
          <div className="quip-note about-hero__quip">Born to a process. Raised on Six Sigma.</div>
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">Education</span>
        <h2 className="section-title" style={{ marginBottom: 30 }}>Degrees</h2>
        <div className="timeline">
          {education.map((e) => (
            <div className="timeline__item card" key={e.school}>
              <div className="timeline__head">
                <span className="timeline__logo">
                  <img src={e.logo} alt={`${e.school} logo`} loading="lazy" decoding="async" />
                </span>
                <span className="badge badge-maroon">{e.date}</span>
              </div>
              <h4 className="timeline__degree">{e.degree}</h4>
              <p className="timeline__school">{e.school}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title" style={{ marginBottom: 30 }}>Where I've Worked</h2>
        <div className="exp-list">
          {experience.map((e) => (
            <div className="exp-item" key={e.role + e.org}>
              <div className="exp-item__rail">
                <span className="exp-item__dot" />
              </div>
              <div className="card exp-item__card">
                <div className="exp-item__head">
                  <div>
                    <h4>{e.role}</h4>
                    <p className="exp-item__org">{e.org}</p>
                  </div>
                  <span className="badge badge-gold">{e.date}</span>
                </div>
                <ul className="deck-list">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Recommendations />

      <section className="section container">
        <span className="eyebrow">Skills</span>
        <h2 className="section-title" style={{ marginBottom: 30 }}>Toolkit</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="card" key={s.group}>
              <h4 className="skills-group">{s.group}</h4>
              <div className="skills-tags">
                {s.items.map((i) => <span className="badge badge-maroon" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <a href="/resume/Samyak_Jain_Resume.pdf" className="btn btn-gold" target="_blank" rel="noreferrer">
          Download Full Résumé (PDF)
        </a>
      </section>
    </>
  )
}
