import Link from 'next/link'
import { formatDate } from '../lib/content'

export default function StoryGrid({ posts }) {
  return (
    <div className="story-grid">
      {posts.map(post => {
        const details = post.frontmatter
        const href = `/blog/${post.slug}/`

        return (
          <article
            className={`story-card${details.featuredpost ? ' story-card--featured' : ''}`}
            key={post.slug}
          >
            <header className="story-card__header">
              {details.featuredimage ? (
                <img
                  className="story-card__image"
                  src={details.featuredimage}
                  alt=""
                  loading="lazy"
                />
              ) : null}
              <div>
                <Link className="story-card__title" href={href}>
                  {details.title}
                </Link>
                <time className="story-card__date" dateTime={new Date(details.date).toISOString()}>
                  {formatDate(details.date)}
                </time>
              </div>
            </header>
            <p className="story-card__summary">{details.description}</p>
            <Link className="button is-light" href={href}>
              Keep Reading <span aria-hidden="true">→</span>
            </Link>
          </article>
        )
      })}
    </div>
  )
}
