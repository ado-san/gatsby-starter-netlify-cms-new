import StoryGrid from '../../components/StoryGrid'
import { getAllPosts } from '../../lib/content'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Blog: open source, AI, sovereign cloud and web technology',
  description:
    'Articles about open source and free software, venture capital, Next.js and React, AI assistants (Claude, ChatGPT, Mistral AI, Gemini), Nextcloud, sovereign cloud and the CLOUD Act.',
  path: '/blog/',
})

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
