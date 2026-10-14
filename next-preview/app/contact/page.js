import Link from 'next/link'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <h1>Contact</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <form
            className="contact-form"
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="name">Your name</label>
              <div className="control">
                <input className="input" type="text" name="name" id="name" required />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control">
                <input className="input" type="email" name="email" id="email" required />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="message">Message</label>
              <div className="control">
                <textarea className="textarea" name="message" id="message" rows="7" required />
              </div>
            </div>
            <button className="button is-brand" type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}
