import StoryGrid from '../../components/StoryGrid'
import { getAllPosts } from '../../lib/content'

export const metadata = {
  title: 'Blog',
  description: 'Latest stories from AD Ventures.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">AD Ventures</p>
          <h1>Blog</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <StoryGrid posts={posts} />
        </div>
      </section>
    </>
  )
}
