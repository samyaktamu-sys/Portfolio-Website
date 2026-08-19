import secondaryPhoto from '../assets/photos/secondary.jpg'
import Recommendations from '../components/Recommendations'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './About.css'

const education = [
  { school: 'Texas A&M University, College Station, TX', degree: 'MS, Industrial Engineering', date: '05/2026' },
  { school: 'Narsee Monjee Institute of Management Studies, India', degree: 'MBA', date: '02/2024' },
  { school: 'Guru Gobind Singh Indraprastha University, India', degree: 'BS, Mechanical & Automation Engineering', date: '05/2021' },
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
    ],
  },
  {
    role: 'Senior Industrial Engineer — Process Improvement',
    org: 'Utility Power Systems, Delhi, India',
    date: '01/2023 – 07/2024',
    bullets: [
      'Recovered process capability (Cpk 0.46 → 1.49) via DMAIC/8D, raising pipe-bending FPY from 80% to 99.4%.',
      'Owned manufacturing readiness for transferred product lines during a facility migration.',
      'Built a JaamSim discrete-event simulation model for layout, buffer, and staffing scenario analysis.',
      'Reduced raw material and WIP inventory from 60 to 15 days, freeing ~$480K in working capital.',
      'Built Power BI dashboards for FPY, OEE, inventory, defects, and on-time delivery.',
    ],
  },
  {
    role: 'Senior Engineer',
    org: 'Uno Minda Limited, Haryana, India',
    date: '01/2022 – 01/2023',
    bullets: [
      'Supported launch of high-volume motorcycle switch assemblies for Yamaha, Suzuki, and Piaggio.',
      'Led pilot assembly-line/workstation layout improvements, cutting operator cycle time ~30%.',
      'Used Moldflow/DFM/DFMEA on injection-molded components to catch flow, cooling, and warpage risk pre-tooling.',
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
  { group: 'Industrial Engineering', items: ['Line/plant layouts', 'Capacity modeling', 'Time studies', 'Line balancing', 'PFEP', 'Material-flow planning'] },
  { group: 'Continuous Improvement', items: ['Six Sigma Green Belt', 'DMAIC', 'SPC', 'PDCA', 'Root-cause analysis', 'FPY improvement'] },
  { group: 'Simulation & Analytics', items: ['JaamSim', 'FlexSim', 'Power BI', 'Python', 'SQL', 'Minitab', 'Tableau'] },
  { group: 'Systems & Design', items: ['AutoCAD', 'SolidWorks', 'SAP', 'Moldflow'] },
]

export default function About() {
  useDocumentTitle('About — Samyak Jain')
  return (
    <>
      <section className="section container about-hero">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="section-title" style={{ marginBottom: 18 }}>
            Quality engineering, not vibes.
          </h1>
          <p className="about-hero__lead">
            I'm a Quality &amp; Process Engineer finishing my MS in Industrial Engineering
            at Texas A&M. Six Sigma Green Belt, three-plus years turning shaky manufacturing
            processes into ones that police themselves — SPC dashboards, DMAIC investigations,
            Moldflow DFM screens, and the occasional multivariate model when a spreadsheet
            isn't rigorous enough.
          </p>
        </div>
        <div className="about-hero__photo hard-shadow-gold">
          <img src={secondaryPhoto} alt="Samyak Jain at Texas A&M" />
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">Education</span>
        <h2 className="section-title" style={{ marginBottom: 30 }}>Degrees</h2>
        <div className="timeline">
          {education.map((e) => (
            <div className="timeline__item card" key={e.school}>
              <span className="badge badge-maroon">{e.date}</span>
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
