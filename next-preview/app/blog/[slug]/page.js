import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDate, getAllPosts, getPostBySlug, slugify } from '../../../lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Article not found' }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      type: 'article',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: new Date(post.frontmatter.date).toISOString(),
      images: post.frontmatter.featuredimage
        ? [post.frontmatter.featuredimage]
        : undefined,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { frontmatter } = post

  return (
    <article>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">AD Ventures / Blog</p>
          <h1>{frontmatter.title}</h1>
          <time className="story-card__date" dateTime={new Date(frontmatter.date).toISOString()}>
            {formatDate(frontmatter.date)}
          </time>
          {frontmatter.description ? (
            <p className="lead-copy mt-4">{frontmatter.description}</p>
          ) : null}
        </div>
      </header>
      <section className="section-band">
        <div className="content-width prose">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {frontmatter.tags?.length ? (
            <div className="mt-6">
              <h2 className="section-title">Tags</h2>
              <ul className="tag-list">
                {frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link href={`/tags/${slugify(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="mt-6">
            <Link href="/blog/">← Back to the blog</Link>
          </p>
        </div>
      </section>
    </article>
  )
}
