import { getPage } from '../../lib/content'
import FeatureGrid from '../../components/FeatureGrid'
import LogoGrid from '../../components/LogoGrid'
import LogoStrip from '../../components/LogoStrip'
import { appServices, appStack, technologies } from '../../lib/tech'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Products & services: websites, mobile apps, AI integration, sovereign cloud',
  description:
    'Fast and secure Next.js and React websites, iOS and Android apps, web and hybrid apps, AI integration with Claude, ChatGPT, Mistral AI or Gemini, Nextcloud and sovereign cloud hosting, and open source consulting for ventures.',
  path: '/products/',
})

export default function ProductsPage() {
  const { frontmatter } = getPage('products')

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">Ad Ventures Limited</p>
          <h1>{frontmatter.heading}</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <p className="lead-copy">{frontmatter.description}</p>
          <FeatureGrid items={frontmatter.intro.blurbs} />
        </div>
      </section>
      <section className="section-band section-band--wash" id="apps">
        <div className="content-width">
          <p className="section-kicker">Mobile & web apps</p>
          <h2 className="section-title">iOS, Android, web and hybrid apps</h2>
          <p className="lead-copy">
            From the first prototype to the App Store and Google Play: we design and build apps your users enjoy,
            and choose native or cross-platform development according to your budget and your goals.
          </p>
          <LogoGrid items={appServices} />
          <LogoStrip items={appStack} label="App technologies" />
        </div>
      </section>
      <section className="section-band">
        <div className="content-width">
          <p className="section-kicker">Our toolbox</p>
          <h2 className="section-title">Technologies we use</h2>
          <p className="lead-copy">
            Proven tools, open source whenever possible, chosen for speed, security and independence. We use
            them every day on our own projects before recommending them to you.
          </p>
          <LogoGrid items={technologies} />
        </div>
      </section>
    </>
  )
}
