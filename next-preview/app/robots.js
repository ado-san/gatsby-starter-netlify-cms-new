import { absoluteUrl, siteUrl } from '../lib/site'

export const dynamic = 'force-static'

// AI crawlers are listed explicitly so the site can be cited by assistants
// (ChatGPT, Claude, Gemini, Mistral, Perplexity...).
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'Google-Extended',
  'MistralAI-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'CCBot',
  'meta-externalagent',
]

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/'] },
      { userAgent: aiCrawlers, allow: '/', disallow: ['/admin/'] },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl,
  }
}
