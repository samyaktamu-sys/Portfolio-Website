import { NavLink } from 'react-router-dom'
import './Header.css'
import mascotPhoto from '../assets/photos/mascot-primary.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="brand">
          <span className="brand__badge">
            <img src={mascotPhoto} alt="Samyak Jain" />
          </span>
          <span className="brand__text">
            <strong>SAMYAK JAIN</strong>
            <em>Quality &amp; Process Eng.</em>
          </span>
        </NavLink>
        <nav className="site-nav">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
