import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Certifications from '../components/Certifications'
import mascotPhoto from '../assets/photos/mascot-primary.jpg'
import useScrollProgress from '../hooks/useScrollProgress'
import './Home.css'

export default function Home() {
  const progress = useScrollProgress(40, 260)
  return (
    <>
      <section className="hero halftone">
        <div className="hero__sunburst sunburst" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1
              className="hero__name"
              style={{
                opacity: 1 - progress,
                transform: `translateY(${-progress * 16}px) scale(${1 - 0.08 * progress})`,
              }}
            >
              Samyak Jain
            </h1>
            <span className="eyebrow">Quality &amp; Process Engineering</span>
            <p className="hero__title">
              I make processes <span>tell the truth.</span>
            </p>
            <p className="hero__lead">
              3+ years turning shaky manufacturing lines into processes that run
              themselves — SPC, DMAIC, the numbers to back it up. Don't take my
              word for it, look at the work.
            </p>
            <div className="hero__cta">
              <Link to="/projects" className="btn btn-gold">See the Projects</Link>
              <a href="/resume/Samyak_Jain_Resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
                Download Résumé
              </a>
            </div>
          </div>
          <div className="hero__portrait">
            <div
              className="hero__frame-wrap"
              style={{
                opacity: 1 - progress,
                transform: `translateY(${-progress * 16}px) scale(${1 - 0.08 * progress})`,
              }}
            >
              <div className="comic-burst hero__burst" aria-hidden="true" />
              <div className="hero__frame hard-shadow-gold">
                <img src={mascotPhoto} alt="Samyak Jain, Texas A&M" fetchPriority="high" decoding="async" />
              </div>
              <span className="hero__ring badge badge-maroon">TEXAS A&amp;M · ISEN</span>
              <div className="quip-note hero__quip">First impressions: Cpk 1.33, minimum.</div>
            </div>
          </div>
        </div>
      </section>

      <Certifications />

      <section className="section container">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title" style={{ marginBottom: 30 }}>What I've Done</h2>
        <div className="home-experience">
          <div className="home-experience__group">
            <h3 className="home-experience__role">Senior Engineer, Utility Power Systems</h3>
            <ul className="deck-list">
              <li>Recovered process capability (Cpk 0.46 → 1.49) on the pipe-bending line via DMAIC and closed-loop SPC, lifting first-pass yield from 80% to 99.4% and eliminating ~$150K/yr in scrap.</li>
              <li>Implemented ISO 9001 Clause 8–10 controls during a facility migration — control plans, in-process inspection points, and the internal audit schedule to hold conformance.</li>
            </ul>
          </div>
          <div className="home-experience__group">
            <h3 className="home-experience__role">Senior Engineer, Uno Minda Limited</h3>
            <ul className="deck-list">
              <li>Used Moldflow/DFM/DFMEA on injection-molded components to catch flow, cooling, and warpage risk pre-tooling.</li>
              <li>Led pilot assembly-line/workstation layout improvements, cutting operator cycle time ~30%.</li>
            </ul>
          </div>
        </div>
        <Link to="/about" className="home-experience__more">See Full Experience →</Link>
      </section>

      <section className="section container">
        <span className="eyebrow">Featured Work</span>
        <h2 className="section-title" style={{ marginBottom: 36 }}>Key Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
        <Link to="/projects" className="home-experience__more" style={{ marginTop: 28, display: 'inline-block' }}>
          See All Projects →
        </Link>
      </section>

      <section className="section container cta-band hard-shadow">
        <div>
          <h2 className="cta-band__title">Have a process that needs to trust its own data?</h2>
          <p>Let's talk about SPC systems, DFM screening, or turning a messy dataset into a control plan.</p>
        </div>
        <Link to="/contact" className="btn btn-gold">Get In Touch</Link>
      </section>
    </>
  )
}
