import { getAllPosts } from '../../lib/content'
import { absoluteUrl, siteDescription, siteName } from '../../lib/site'

export const dynamic = 'force-static'

export function GET() {
  const posts = getAllPosts()
    .map(
      post => `# ${post.frontmatter.title.trim()}

URL: ${absoluteUrl(`/blog/${post.slug}/`)}
Published: ${new Date(post.frontmatter.date).toISOString().slice(0, 10)}
Tags: ${(post.frontmatter.tags || []).join(', ')}

> ${String(post.frontmatter.description || '').trim()}

${post.body.trim()}`
    )
    .join('\n\n---\n\n')

  return new Response(`# ${siteName}\n\n> ${siteDescription}\n\n---\n\n${posts}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
