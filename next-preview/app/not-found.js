import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-band">
      <div className="content-width prose">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn’t exist... the sadness.</p>
        <Link href="/">Return home</Link>
      </div>
    </section>
  )
}
