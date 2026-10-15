'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Netlify Forms: submissions are POSTed to the static skeleton in
// public/__forms.html, which Netlify detects at deploy time.
export default function ContactForm() {
  const router = useRouter()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(event.currentTarget)).toString(),
      })

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)

      router.push('/contact/thanks/')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="name">Your name</label>
        <div className="control">
          <input className="input" type="text" name="name" id="name" autoComplete="name" required />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <div className="control">
          <input className="input" type="email" name="email" id="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="subject">Subject</label>
        <div className="control">
          <input className="input" type="text" name="subject" id="subject" />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">Message</label>
        <div className="control">
          <textarea className="textarea" name="message" id="message" rows="7" required />
        </div>
      </div>
      {status === 'error' ? (
        <p className="notification is-danger is-light" role="alert">
          Sorry, your message could not be sent. Please try again in a moment.
        </p>
      ) : null}
      <button className="button is-brand" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
