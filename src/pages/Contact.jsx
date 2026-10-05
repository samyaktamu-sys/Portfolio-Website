import { useState } from 'react'
import aggieRingPhoto from '../assets/photos/aggie-ring.jpg'
import './Contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkpdqjg'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section container contact">
      <div className="contact__intro">
        <span className="eyebrow">Contact</span>
        <h1 className="section-title" style={{ marginBottom: 16 }}>Send a Message</h1>
        <p>
          Hiring for a manufacturing, quality, or process role, or have questions
          about one of the projects? Drop a note. I read everything that comes
          through here.
        </p>
        <ul className="contact__direct">
          <li>
            <span className="contact__icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </span>
            <span className="contact__direct-text">
              <strong>Email</strong>
              <a href="mailto:samyak.tamu@gmail.com">samyak.tamu@gmail.com</a>
            </span>
          </li>
          <li>
            <span className="contact__icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="contact__direct-text">
              <strong>Phone</strong>
              <span>(979) 575-9626</span>
            </span>
          </li>
          <li>
            <span className="contact__icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </span>
            <span className="contact__direct-text">
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/samyak-delhi" target="_blank" rel="noreferrer">linkedin.com/in/samyak-delhi</a>
            </span>
          </li>
        </ul>
        <div className="contact__photo hard-shadow-gold">
          <div className="comic-burst comic-burst--maroon contact__burst" aria-hidden="true" />
          <img src={aggieRingPhoto} alt="Samyak Jain at the Texas A&M Ring monument" loading="lazy" decoding="async" />
          <span className="badge badge-maroon contact__photo-badge">GIG 'EM</span>
          <div className="quip-note contact__quip">A process this good doesn't lose sigma points. Reach out now.</div>
        </div>
      </div>

      <form className="contact__form card hard-shadow" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="you@company.com" />
        </label>
        <label>
          Message
          <textarea name="message" required rows={6} placeholder="What's on your mind?" />
        </label>
        <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="contact__note contact__note--good">Sent — thanks, I'll get back to you soon.</p>}
        {status === 'error' && <p className="contact__note contact__note--bad">Something went wrong — email me directly instead.</p>}
      </form>
    </section>
  )
}
