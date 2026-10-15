import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../../components/JsonLd'
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  readingTime,
  slugify,
} from '../../../lib/content'
import {
  absoluteUrl,
  author,
  breadcrumbJsonLd,
  pageMetadata,
  siteName,
  siteUrl,
} from '../../../lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

function toIso(value) {
  return value ? new Date(value).toISOString() : undefined
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Article not found' }

  const { frontmatter } = post

  return {
    ...pageMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      path: `/blog/${post.slug}/`,
      image: frontmatter.featuredimage,
      type: 'article',
      keywords: frontmatter.tags,
      openGraph: {
        publishedTime: toIso(frontmatter.date),
        modifiedTime: toIso(frontmatter.updated || frontmatter.date),
        authors: [author.url],
        tags: frontmatter.tags,
      },
    }),
    authors: [author],
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { frontmatter } = post
  const path = `/blog/${post.slug}/`
  const minutes = readingTime(post.body)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(path)}#article`,
    mainEntityOfPage: absoluteUrl(path),
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.featuredimage ? absoluteUrl(frontmatter.featuredimage) : undefined,
    datePublished: toIso(frontmatter.date),
    dateModified: toIso(frontmatter.updated || frontmatter.date),
    author: { '@type': 'Person', name: author.name, url: author.url },
    publisher: { '@id': `${siteUrl}/#organization` },
    keywords: frontmatter.tags?.join(', '),
    wordCount: post.body.split(/\s+/).length,
    inLanguage: 'en',
  }

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: siteName, path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: frontmatter.title, path },
        ])}
      />
      <header className="page-heading">
        <div className="page-heading__inner">
          <nav className="section-kicker" aria-label="Breadcrumb">
            <Link href="/">AD Ventures</Link> / <Link href="/blog/">Blog</Link>
          </nav>
          <h1>{frontmatter.title}</h1>
          <p className="story-card__date">
            <time dateTime={toIso(frontmatter.date)}>{formatDate(frontmatter.date)}</time>
            {frontmatter.updated ? (
              <>
                {' · Updated '}
                <time dateTime={toIso(frontmatter.updated)}>{formatDate(frontmatter.updated)}</time>
              </>
            ) : null}
            {` · ${minutes} min read · by ${author.name}`}
          </p>
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
