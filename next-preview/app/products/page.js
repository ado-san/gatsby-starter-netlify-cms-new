import { getPage } from '../../lib/content'
import FeatureGrid from '../../components/FeatureGrid'

export const metadata = {
  title: 'AD Ventures Products & Services',
}

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
