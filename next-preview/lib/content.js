import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const repositoryRoot = path.resolve(process.cwd(), '..')
const pagesDirectory = path.join(repositoryRoot, 'src/pages')
const blogDirectory = path.join(pagesDirectory, 'blog')
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
})

function parseFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)

  return {
    slug: path.basename(filePath, '.md'),
    frontmatter: parsed.data,
    body: parsed.content,
    html: markdown.render(parsed.content),
  }
}

export function getPage(pageName) {
  const filePath =
    pageName === 'home'
      ? path.join(pagesDirectory, 'index.md')
      : path.join(pagesDirectory, pageName, 'index.md')

  return parseFile(filePath)
}

export function getAllPosts() {
  return fs
    .readdirSync(blogDirectory)
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => parseFile(path.join(blogDirectory, fileName)))
    .filter(post => post.frontmatter.templateKey === 'blog-post')
    .sort(
      (first, second) =>
        new Date(second.frontmatter.date).getTime() -
        new Date(first.frontmatter.date).getTime()
    )
}

export function getPostBySlug(slug) {
  return getAllPosts().find(post => post.slug === slug)
}

export function getAllTags() {
  const tags = new Map()

  for (const post of getAllPosts()) {
    for (const label of post.frontmatter.tags || []) {
      const slug = slugify(label)
      const current = tags.get(slug)
      tags.set(slug, { label, slug, count: (current?.count || 0) + 1 })
    }
  }

  return [...tags.values()].sort((first, second) =>
    first.label.localeCompare(second.label)
  )
}

export function getPostsByTag(tagSlug) {
  return getAllPosts().filter(post =>
    (post.frontmatter.tags || []).some(tag => slugify(tag) === tagSlug)
  )
}

export function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value))
}
