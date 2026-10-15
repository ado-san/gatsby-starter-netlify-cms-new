import ContactForm from '../../components/ContactForm'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact AD Ventures about a website, an AI project, open source or sovereign cloud hosting.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <h1>Contact</h1>
          <p className="lead-copy mt-4">
            A website, an AI project, a Nextcloud or sovereign cloud migration, an open source venture? Tell us about it.
          </p>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
