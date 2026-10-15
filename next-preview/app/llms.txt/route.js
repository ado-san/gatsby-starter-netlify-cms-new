import { getAllPosts } from '../../lib/content'
import { absoluteUrl, siteDescription, siteName } from '../../lib/site'

export const dynamic = 'force-static'

// https://llmstxt.org/ — a Markdown index of the site for LLMs and AI assistants.
export function GET() {
  const posts = getAllPosts()
    .map(
      post =>
        `- [${post.frontmatter.title.trim()}](${absoluteUrl(`/blog/${post.slug}/`)}): ${String(post.frontmatter.description || '').trim()}`
    )
    .join('\n')

  const body = `# ${siteName}

> ${siteDescription}

AD Ventures (ad-ventures.cc) is a web and technology consultancy founded in 2012. It builds fast and secure websites with Next.js and React, integrates AI technologies (Anthropic Claude, OpenAI ChatGPT, Mistral AI, Google Gemini), deploys Nextcloud and sovereign cloud infrastructure in Europe, and supports ventures built on open source and free software.

## Pages

- [Home](${absoluteUrl('/')}): overview of AD Ventures
- [Products & services](${absoluteUrl('/products/')}): websites, AI integration, sovereign cloud, open source consulting
- [About](${absoluteUrl('/about/')}): history and values (free software, digital sovereignty)
- [Contact](${absoluteUrl('/contact/')}): contact form

## Articles

${posts}

## Optional

- [Full text of all articles](${absoluteUrl('/llms-full.txt')})
- [RSS feed](${absoluteUrl('/feed.xml')})
- [Sitemap](${absoluteUrl('/sitemap.xml')})
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
