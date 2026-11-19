import ContactForm from '../../components/ContactForm'
import { pageMetadata } from '../../lib/site'

const whatsappUrl = `https://wa.me/85261009858?text=${encodeURIComponent(
  'Hello Ad Ventures Limited, I would like to talk about a project.'
)}`

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Ad Ventures Limited about a website, an app, a game, an AI project, a Nextcloud or sovereign cloud migration, or an open source venture. Write to us or chat on WhatsApp.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <h1>Contact</h1>
          <p className="lead-copy mt-4">
            A website, an App, a Game, an AI project, a Nextcloud or sovereign cloud migration, an open source
            venture? Tell us about it.
          </p>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width contact-layout">
          <ContactForm />
          <aside className="chat-card">
            <h2 className="chat-card__title">Chat with us</h2>
            <p>Prefer a quick conversation? Send us a message on WhatsApp.</p>
            <a className="button whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <img src="/img/tech/whatsapp.svg" alt="" width="22" height="22" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="chat-card__number">+852 6100 9858</p>
          </aside>
        </div>
      </section>
    </>
  )
}
