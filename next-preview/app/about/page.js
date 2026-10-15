import { getPage } from '../../lib/content'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'About AD Ventures: open source, ventures and web technology',
  description:
    'AD Ventures is a web and technology consultancy founded in 2012, committed to free software, digital sovereignty and responsible AI.',
  path: '/about/',
})

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
