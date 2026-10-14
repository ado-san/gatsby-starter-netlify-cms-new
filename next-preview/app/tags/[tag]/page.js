import Link from 'next/link'
import { notFound } from 'next/navigation'
import StoryGrid from '../../../components/StoryGrid'
import { getAllTags, getPostsByTag } from '../../../lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllTags().map(tag => ({ tag: tag.slug }))
}

export async function generateMetadata({ params }) {
  const { tag: tagSlug } = await params
  const tag = getAllTags().find(item => item.slug === tagSlug)

  return { title: tag ? `${tag.label} | Tags` : 'Tag not found' }
}

export default async function TagPage({ params }) {
  const { tag: tagSlug } = await params
  const tag = getAllTags().find(item => item.slug === tagSlug)

  if (!tag) notFound()

  const posts = getPostsByTag(tagSlug)

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">{posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with</p>
          <h1>{tag.label}</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <StoryGrid posts={posts} />
          <p className="mt-5">
            <Link href="/tags/">Browse all tags</Link>
          </p>
        </div>
      </section>
    </>
  )
}
