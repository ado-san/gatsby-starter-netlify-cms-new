import Link from 'next/link'
import { getPage } from '../../lib/content'
import { pageMetadata } from '../../lib/site'
import LogoGrid from '../../components/LogoGrid'
import { licences, technologies } from '../../lib/tech'

export const metadata = pageMetadata({
  title: 'About AD Ventures: open source, ventures and web technology',
  description:
    'AD Ventures is a web and technology consultancy founded in 2012, committed to free software, digital sovereignty and responsible AI.',
  path: '/about/',
})

// The page body comes from src/pages/about/index.md (editable in the CMS).
// It is split on its <h2> headings so each part gets its own styled block,
// and some headings get a visual below them (matched on the heading text).
function splitSections(html) {
  return html
    .split(/(?=<h2>)/)
    .map(chunk => {
      const match = chunk.match(/^<h2>(.*?)<\/h2>\s*/s)
      if (!match) return { title: null, html: chunk }
      return { title: match[1], html: chunk.slice(match[0].length) }
    })
    .filter(section => section.title || section.html.trim())
}

function sectionVisual(title = '') {
  const key = title.toLowerCase()
  if (key.includes('our values')) return <LogoGrid items={licences} variant="licence" />
  if (key.startsWith('technology')) {
    return (
      <ul className="logo-strip" aria-label="Technologies we use">
        {technologies.map(tech => (
          <li key={tech.name}>
            <img src={tech.logo} alt="" width="36" height="36" loading="lazy" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    )
  }
  return null
}

export default function AboutPage() {
  const page = getPage('about')
  const sections = splitSections(page.html)
  let number = 0

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">Since 2012</p>
          <h1>{page.frontmatter.title}</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width about-sections">
          {sections.map((section, index) => {
            if (section.title) number += 1
            return (
              <article className="about-section" key={index}>
                {section.title && (
                  <h2 className="about-section__title">
                    <span className="about-section__number" aria-hidden="true">
                      {String(number).padStart(2, '0')}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: section.title }} />
                  </h2>
                )}
                <div className="prose" dangerouslySetInnerHTML={{ __html: section.html }} />
                {sectionVisual(section.title)}
              </article>
            )
          })}
        </div>
      </section>
      <section className="section-band section-band--wash">
        <div className="content-width has-text-centered">
          <h2 className="section-title">Let&apos;s build something together</h2>
          <Link className="button is-brand mt-4" href="/contact/">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
