import { formatDate, getPage } from '../lib/content'

export default function LegalPage({ name }) {
  const page = getPage(name)

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">Ad Ventures Limited</p>
          <h1>{page.frontmatter.title}</h1>
          {page.frontmatter.updated && (
            <p className="story-card__date mt-3">Last updated: {formatDate(page.frontmatter.updated)}</p>
          )}
        </div>
      </header>
      <section className="section-band">
        <div className="content-width prose" dangerouslySetInnerHTML={{ __html: page.html }} />
      </section>
    </>
  )
}
