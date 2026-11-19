import { getAllPosts, getAllTags } from '../lib/content'
import { games } from '../lib/games'
import { absoluteUrl } from '../lib/site'

export const dynamic = 'force-static'

export default function sitemap() {
  const posts = getAllPosts()
  const latest = posts[0] && new Date(posts[0].frontmatter.updated || posts[0].frontmatter.date)

  const pages = [
    { path: '/', priority: 1, changeFrequency: 'weekly', lastModified: latest },
    { path: '/blog/', priority: 0.9, changeFrequency: 'weekly', lastModified: latest },
    { path: '/products/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/games/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/tags/', priority: 0.4, changeFrequency: 'weekly' },
    { path: '/terms/', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/privacy/', priority: 0.2, changeFrequency: 'yearly' },
  ]

  return [
    ...pages.map(({ path, ...entry }) => ({ url: absoluteUrl(path), ...entry })),
    ...posts.map(post => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: new Date(post.frontmatter.updated || post.frontmatter.date),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: post.frontmatter.featuredimage
        ? [absoluteUrl(post.frontmatter.featuredimage)]
        : undefined,
    })),
    ...games.map(game => ({
      url: absoluteUrl(`/games/${game.slug}/`),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [absoluteUrl(game.logo)],
    })),
    ...getAllTags().map(tag => ({
      url: absoluteUrl(`/tags/${tag.slug}/`),
      changeFrequency: 'monthly',
      priority: 0.3,
    })),
  ]
}
