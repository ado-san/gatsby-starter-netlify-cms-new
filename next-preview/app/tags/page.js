import Link from 'next/link'
import { getAllTags } from '../../lib/content'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Topics',
  description: 'Browse AD Ventures articles by topic.',
  path: '/tags/',
})

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <h1>Tags</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <ul className="tag-list">
            {tags.map(tag => (
              <li key={tag.slug}>
                <Link href={`/tags/${tag.slug}/`}>
                  {tag.label} ({tag.count})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
