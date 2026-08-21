import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import mascotPhoto from '../assets/photos/mascot-primary.jpg'
import useScrollProgress from '../hooks/useScrollProgress'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const scrollProgress = useScrollProgress(40, 260)
  const brandProgress = isHome ? scrollProgress : 1

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink
          to="/"
          className="brand"
          style={{
            opacity: brandProgress,
            transform: `translateY(${(1 - brandProgress) * 10}px) scale(${0.82 + 0.18 * brandProgress})`,
          }}
        >
          <span className="brand__badge">
            <img src={mascotPhoto} alt="Samyak Jain" />
          </span>
          <span className="brand__name">Samyak Jain</span>
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
