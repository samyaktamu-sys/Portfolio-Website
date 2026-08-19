import { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './Contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkpdqjg'

export default function Contact() {
  useDocumentTitle('Contact — Samyak Jain')
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
          Hiring for a quality/process role, want to talk SPC systems, or just have
          questions about a project above? Drop a note — I read everything that comes
          through here.
        </p>
        <ul className="contact__direct">
          <li><strong>Email</strong><a href="mailto:samyak.nov@gmail.com">samyak.nov@gmail.com</a></li>
          <li><strong>Phone</strong><span>(979) 575-9626</span></li>
          <li><strong>LinkedIn</strong><a href="https://www.linkedin.com/in/samyak-delhi" target="_blank" rel="noreferrer">linkedin.com/in/samyak-delhi</a></li>
        </ul>
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
