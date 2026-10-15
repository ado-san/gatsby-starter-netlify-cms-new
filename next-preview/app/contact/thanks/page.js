import Link from 'next/link'

export const metadata = {
  title: 'Thank you',
  robots: { index: false, follow: true },
}

export default function ThanksPage() {
  return (
    <section className="section-band">
      <div className="content-width prose">
        <h1>Thank you!</h1>
        <p>Your message has been sent. We will get back to you as soon as possible.</p>
        <Link className="button is-brand mt-4" href="/">Back to home</Link>
      </div>
    </section>
  )
}
