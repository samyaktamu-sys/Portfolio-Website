import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="stripes site-footer__bar" />
      <div className="container site-footer__inner">
        <div>
          <h3 className="site-footer__title">Let's talk quality.</h3>
          <p className="site-footer__sub">SPC · DMAIC · Multivariate Process Analytics</p>
        </div>
        <ul className="site-footer__links">
          <li>
            <a href="mailto:samyak.tamu@gmail.com">
              samyak.tamu@gmail.com
              <svg className="site-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samyak-delhi" target="_blank" rel="noreferrer">
              LinkedIn
              <svg className="site-footer__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </li>
          <li>
            <Link to="/contact">
              Contact Form
              <svg className="site-footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container site-footer__legal">
        <span>© {new Date().getFullYear()} Samyak Jain · College Station, TX</span>
        <span className="badge badge-gold">Gig 'Em</span>
      </div>
    </footer>
  )
}
