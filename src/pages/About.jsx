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
    role: 'Lab Technician, Chemistry Department',
    org: 'Texas A&M University, College Station, TX',
    date: '01/2025 – 05/2026',
    bullets: [
      'Supported installation and maintenance of chemical fume hoods, coordinating with vendors and verifying airflow and safety system performance after commissioning.',
      'Installed and tested Schlenk line vacuum and inert-gas systems during lab setup; leak-checked them with vacuum-hold tests and the gloveboxes with pressure-hold tests.',
      'Operated and maintained inert-atmosphere glovebox systems in controlled environments, enforcing contamination-control protocols and atmosphere integrity.',
      'Led a materials safety upgrade replacing mercury bubblers with mercury-free alternatives across lab setups, with zero disruption to ongoing work.',
      'Rebuilt the lab’s inventory system for 1,000+ chemical containers, applying 5S (labeling, sorting, set locations) and training all scientists on check-out and return discipline, making retrieval faster and more reliable.',
      'Ran periodic inspections of fume hoods, eyewash stations, and safety showers, and planned new glovebox and fume hood placement around fire safety and evacuation routes.',
    ],
  },
  {
    role: 'Project Engineer',
    org: 'Utility Power Systems, Delhi, India',
    date: '01/2023 – 07/2024',
    bullets: [
      'Owned quality for the pipe-bending line: a Gauge R&R traced 35-40% of observed variation to inconsistent operator measurement; after fixing it, SPC and DMAIC raised Cpk from 0.46 to 1.49 and First-Pass Yield from 80% to 99.4%, eliminating $150K/year in scrap.',
      'Used Theory of Constraints to target the pipe-bending bottleneck, applying SMED and planned maintenance to raise its output about 20% (bends per day); with the yield work, OEE rose from about 45% to 65%.',
      'Built a FlexSim discrete-event simulation of layout, buffer, and staffing scenarios against a 25-30% projected demand increase, showing a second machine would add about 70% capacity, which supported approval of the second pipe-bending machine.',
      'Wrote, ran, and signed off the FAT at the OEM and the SAT at the plant for the second pipe-bending machine, covering bend accuracy on sample parts, machine safety, and hydraulics and controls.',
      'Built the plant’s first real-time production dataset by training operators to log each part at every station in Odoo, then built Power BI dashboards (SQL, DirectQuery to the ERP’s PostgreSQL database) for First-Pass Yield, OEE, defects, inventory, and on-time delivery.',
      'Helped implement ISO 9001 Clauses 8–10 during a facility migration: built manufacturing control plans and the internal audit schedule, wrote SOPs for welding, blasting, galvanizing, and powder coating, and ran layered process audits on the line.',
      'Planned plant and line layouts in AutoCAD, designing straight-line pipe flow so pipes never had to be rotated between operations; the layout needed about 800 sq ft less floor space than the alternative considered.',
      'Supervised and assigned daily work to 20+ operators on a CNC hydraulic pipe-bending line, training them on SOPs and work instructions.',
      'Resolved customer field-failure escalations: delivered the rework the customer needed on site, traced each failure to its originating process, and put corrective actions such as poka-yoke in place so it could not recur.',
      'Qualified alternate suppliers against ISO 9001 and IBR requirements, set AQL sampling plans for incoming material, and issued supplier corrective actions and followed them to closure.',
    ],
  },
  {
    role: 'Manufacturing Engineer',
    org: 'Uno Minda Limited, Haryana, India',
    date: '01/2022 – 01/2023',
    bullets: [
      'Supported APQP and PPAP launches of high-volume motorcycle switch assemblies for Yamaha, Suzuki, and Piaggio, owning the control plan, sample production parts, master sample, and checking-aids elements.',
      'Designed a pilot production line to IATF 16949 requirements, owning the process flow chart, floor plan layout, routing, SOPs, and operator skill matrix, using value stream mapping and Yamazumi charts; the line ran about 30% faster than the required speed.',
      'Chose vision-inspection stations for the new line and wrote the vision checks and NG-bin scan interlock into the PFMEA and control plan, so a station would not scan the next part until the NG part was in the reject bin.',
      'As PFMEA action owner on a PFMEA led by the engineering manager, and contributing the manufacturing view in DFMEA reviews across 8 product designs, helped catch 20+ potential failure modes and cut design-stage issues about 30% before tooling release.',
      'Reviewed 25+ assembly lines for conformance to IATF 16949 requirements ahead of certification, working with production and quality to close gaps in documentation and process control.',
      'Owned engineering change management and document control for 25+ product lines in SAP (BOMs, routings, ECRs), self-initiating several ECRNs to make assembly easier for operators.',
      'Resolved a rivet-height defect through an 8D, tracing it with 5 Why to riveting-station tooling, and presented the fix to the customer on a one-page A3.',
      'Designed wire-harness routing and layout for the switch assemblies, including connector and terminal selection, crimp specification, poka-yoke built into the harness design, end-of-line continuity testing, and crimp pull-force testing.',
      'Read CAN and LIN bus messages to diagnose switch units that failed end-of-line functional tests.',
      'Owned 20+ of the plant’s 37 Kaizen and Lean initiatives, projecting and then verifying cycle-time, quality, and cost impact, contributing to about 4–5% cost reduction in targeted assemblies.',
      'Used Moldflow simulation and DFM reviews on 100+ injection-molded components during design to predict flow, cooling, and warpage defects early.',
    ],
  },
  {
    role: 'Intern',
    org: 'Boiler Components Mfg. Co., Delhi, India',
    date: '03/2020 – 08/2020',
    bullets: [
      'Drafted new consignments in 2D on AutoCAD and oversaw fabrication against the drawings.',
      'Built a foundation in Lean Manufacturing and Just-In-Time (JIT).',
    ],
  },
]

const skills = [
  { group: 'Standards & Compliance', items: ['ISO 9001 Internal Auditor', 'IATF 16949 Internal Auditor', 'Layered process audits', 'Machine guarding', 'Ergonomics', 'PPE / hazard communication', 'LOTO'] },
  { group: 'Quality & Problem Solving', items: ['APQP', 'PPAP', 'Control plans', 'DFMEA', 'PFMEA', '8D', 'DMAIC', '5 Why', 'Fishbone', 'A3', 'SPC', 'Gauge R&R (MSA)', 'ANOVA', 'Cpk / First-Pass Yield', 'AQL sampling', 'FAT / SAT', 'GD&T', 'Vision inspection & traceability'] },
  { group: 'Lean & Continuous Improvement', items: ['Six Sigma Green Belt', 'PMP (in progress)', 'Kaizen', 'Value stream mapping', 'SMED', 'Theory of Constraints', 'Kanban', '5S', 'Yamazumi charts', 'Gemba walks', 'Just-in-Time'] },
  { group: 'Industrial Engineering', items: ['Line & plant layouts', 'Capacity modeling', 'Discrete-event simulation', 'Time studies', 'Line balancing', 'Workstation design', 'PFEP', 'Milk runs', 'Critical path method', 'MS Project'] },
  { group: 'Data & Analytics', items: ['Power BI', 'SQL', 'Excel (advanced)', 'VBA', 'JMP (project-level)', 'R', 'MATLAB', 'Python (coursework)', 'Minitab (coursework)', 'AI agents (Claude Code)'] },
  { group: 'Machine Learning (project-level)', items: ['Lasso', 'Random forest', 'Gradient boosting', 'CNNs & transfer learning', 'Grad-CAM', 'PCA', 'Rolling-origin validation'] },
  { group: 'Systems & Design', items: ['SAP', 'Odoo ERP', 'FlexSim', 'JaamSim', 'AutoCAD', 'SolidWorks', 'Creo', 'CATIA (customer models)', 'Ansys', 'Moldflow', 'Visio'] },
  { group: 'Manufacturing Processes', items: ['High-volume assembly', 'Wire harness (crimp, continuity, pull-force)', 'CAN / LIN end-of-line test review', 'Hand soldering', 'Pipe bending / forming', 'Weld fixtures & weld inspection', 'Blasting', 'Galvanizing', 'Powder coating', 'Sheet metal', 'Injection-molded components'] },
]

export default function About() {
  return (
    <>
      <section className="section container about-hero">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="section-title" style={{ marginBottom: 18 }}>
            Manufacturing &amp; quality engineering, not vibes.
          </h1>
          <p className="about-hero__lead">
            I'm a manufacturing and quality engineer with an MS in Industrial
            Engineering from Texas A&amp;M and an MBA. Six Sigma Green Belt and
            ISO 9001 / IATF 16949 internal auditor, with 3+ years across
            manufacturing engineering and lab roles: automotive launches with
            APQP and PPAP, a pilot line that beat its required speed, SPC and
            DMAIC on a pipe-bending bottleneck, and FlexSim and Power BI for the
            capacity and data side.
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
