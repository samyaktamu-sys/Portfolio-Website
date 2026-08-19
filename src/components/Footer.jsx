import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="stripes site-footer__bar" />
      <div className="container site-footer__inner">
        <div>
          <h3 className="site-footer__title">Let's talk quality.</h3>
          <p className="site-footer__sub">SPC · DMAIC · Moldflow DFM · Multivariate Process Analytics</p>
        </div>
        <ul className="site-footer__links">
          <li><a href="mailto:samyak.tamu@gmail.com">samyak.tamu@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/samyak-delhi" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><Link to="/contact">Contact Form →</Link></li>
        </ul>
      </div>
      <div className="container site-footer__legal">
        <span>© {new Date().getFullYear()} Samyak Jain · College Station, TX</span>
        <span className="badge badge-gold">Gig 'Em</span>
      </div>
    </footer>
  )
}
