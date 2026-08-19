import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import mascotPhoto from '../assets/photos/mascot-primary.jpg'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './Home.css'

export default function Home() {
  useDocumentTitle('Samyak Jain — Quality & Process Engineering')
  return (
    <>
      <section className="hero halftone">
        <div className="hero__sunburst sunburst" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="hero__name">Samyak Jain</span>
            <span className="eyebrow">Quality &amp; Process Engineering</span>
            <h1 className="hero__title">
              I make processes <span>tell the truth.</span>
            </h1>
            <p className="hero__lead">
              SPC, DMAIC, and multivariate process analytics — turning 80% yield into 99.4%,
              settling cross-functional standoffs with Moldflow data, and building the
              control systems that keep the fix in place after I walk away.
            </p>
            <div className="hero__cta">
              <Link to="/projects" className="btn btn-gold">See the Case Studies</Link>
              <a href="/resume/Samyak_Jain_Resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
                Download Résumé
              </a>
            </div>
          </div>
          <div className="hero__portrait">
            <div className="hero__frame-wrap">
              <div className="hero__frame hard-shadow-gold">
                <img src={mascotPhoto} alt="Samyak Jain, Texas A&M" />
              </div>
              <span className="hero__ring badge badge-maroon">TEXAS A&amp;M · ISEN</span>
            </div>
            <span className="hero__caption">Samyak Jain</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="stat-grid">
          <div className="stat-tile">
            <div className="value">80% → 99.4%</div>
            <div className="label">First-Pass Yield</div>
          </div>
          <div className="stat-tile">
            <div className="value">0.46 → 1.49</div>
            <div className="label">Process Capability (Cpk)</div>
          </div>
          <div className="stat-tile">
            <div className="value">$150K/yr</div>
            <div className="label">Scrap &amp; Rework Eliminated</div>
          </div>
          <div className="stat-tile">
            <div className="value">50+</div>
            <div className="label">Parts DFM-Screened</div>
          </div>
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">Featured Work</span>
        <h2 className="section-title" style={{ marginBottom: 36 }}>Case Studies</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
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
