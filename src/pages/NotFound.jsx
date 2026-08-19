import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('404 — Samyak Jain')
  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <h1 className="section-title">404 — Out of Control</h1>
      <p style={{ margin: '18px 0 26px' }}>This page fell outside the spec limits.</p>
      <Link to="/" className="btn btn-gold">Back to Home</Link>
    </section>
  )
}
