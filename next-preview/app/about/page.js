import { getPage } from '../../lib/content'

export const metadata = {
  title: 'About our values',
}

export default function AboutPage() {
  const page = getPage('about')

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <h1>{page.frontmatter.title}</h1>
        </div>
      </header>
      <section className="section-band">
        <div
          className="content-width prose"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </section>
    </>
  )
}
