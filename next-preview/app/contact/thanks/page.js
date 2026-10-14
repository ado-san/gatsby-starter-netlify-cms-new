import Link from 'next/link'

export const metadata = {
  title: 'Thank you',
}

export default function ThanksPage() {
  return (
    <section className="section-band">
      <div className="content-width prose">
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
        <Link className="button is-brand mt-4" href="/">Back to home</Link>
      </div>
    </section>
  )
}
