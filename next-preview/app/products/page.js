import { getPage } from '../../lib/content'
import FeatureGrid from '../../components/FeatureGrid'
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
    </>
  )
}
