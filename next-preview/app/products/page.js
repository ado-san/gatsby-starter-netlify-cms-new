import { getPage } from '../../lib/content'
import FeatureGrid from '../../components/FeatureGrid'
import LogoGrid from '../../components/LogoGrid'
import { technologies } from '../../lib/tech'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Products & services: Next.js websites, AI integration, sovereign cloud',
  description:
    'Fast and secure Next.js and React websites, AI integration with Claude, ChatGPT, Mistral AI or Gemini, Nextcloud and sovereign cloud hosting, and open source consulting for ventures.',
  path: '/products/',
})

export default function ProductsPage() {
  const { frontmatter } = getPage('products')

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">AD Ventures</p>
          <h1>{frontmatter.heading}</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <p className="lead-copy">{frontmatter.description}</p>
          <FeatureGrid items={frontmatter.intro.blurbs} />
        </div>
      </section>
      <section className="section-band section-band--wash">
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
