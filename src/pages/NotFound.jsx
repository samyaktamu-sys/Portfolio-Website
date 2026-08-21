import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <h1 className="section-title">404 — Out of Control</h1>
      <p style={{ margin: '18px 0 26px' }}>This page fell outside the spec limits.</p>
      <Link to="/" className="btn btn-gold">Back to Home</Link>
    </section>
  )
}
