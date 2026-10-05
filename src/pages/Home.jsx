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
            <span className="eyebrow">Manufacturing &amp; Quality Engineering</span>
            <p className="hero__title">
              I make processes <span>tell the truth.</span>
            </p>
            <p className="hero__lead">
              3+ years across manufacturing engineering and lab roles: automotive
              launches, SPC and DMAIC on the shop floor, and the numbers to back
              it up. Don't take my word for it, look at the work.
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
            <h3 className="home-experience__role">Project Engineer, Utility Power Systems</h3>
            <ul className="deck-list">
              <li>Traced 35-40% of measured variation to the gauge with a Gauge R&amp;R, then used SPC and DMAIC to raise Cpk from 0.46 to 1.49 and First-Pass Yield from 80% to 99.4%, eliminating $150K/year in scrap.</li>
              <li>Built the FlexSim capacity case for a second pipe-bending machine (about 70% more capacity at the bottleneck), then wrote, ran, and signed off its FAT and SAT.</li>
            </ul>
          </div>
          <div className="home-experience__group">
            <h3 className="home-experience__role">Manufacturing Engineer, Uno Minda Limited</h3>
            <ul className="deck-list">
              <li>Supported APQP and PPAP launches of motorcycle switch assemblies for Yamaha, Suzuki, and Piaggio, owning the control plan, master sample, and checking-aids elements.</li>
              <li>Designed a pilot production line to IATF 16949 requirements that ran about 30% faster than the required line speed.</li>
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
          <p>Let's talk about launching a line, fixing a yield problem, or turning a messy dataset into a control plan.</p>
        </div>
        <Link to="/contact" className="btn btn-gold">Get In Touch</Link>
      </section>
    </>
  )
}
