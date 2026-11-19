import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../../components/JsonLd'
import { games, getGame } from '../../../lib/games'
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, siteName } from '../../../lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return games.map(game => ({ slug: game.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const game = getGame(slug)

  if (!game) return { title: 'Game not found' }

  return pageMetadata({
    title: `${game.title} — ${game.category} game customizable for your company`,
    description: `${game.summary} Play it online and discover what Ad Ventures Limited can customize for your company.`,
    path: `/games/${game.slug}/`,
  })
}

export default async function GamePage({ params }) {
  const { slug } = await params
  const game = getGame(slug)

  if (!game) notFound()

  const path = `/games/${game.slug}/`

  return (
    <article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: siteName, path: '/' },
          { name: 'Games', path: '/games/' },
          { name: game.title, path },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'VideoGame',
          name: game.title,
          description: game.summary,
          url: absoluteUrl(path),
          image: absoluteUrl(game.logo),
          genre: game.category,
          gamePlatform: 'Web browser',
          applicationCategory: 'Game',
          operatingSystem: 'Any',
          playMode: 'SinglePlayer',
        }}
      />
      <header className="page-heading">
        <div className="page-heading__inner">
          <nav className="section-kicker" aria-label="Breadcrumb">
            <Link href="/">Ad Ventures Limited</Link> / <Link href="/games/">Games</Link>
          </nav>
          <h1>{game.title}</h1>
        </div>
      </header>

      <section className="section-band">
        <div className="content-width">
          <div className="game-hero">
            <img className="game-logo game-logo--large" src={game.logo} alt={`${game.title} logo`} width="128" height="128" />
            <div>
              <span className="game-tag" style={{ '--tag': game.color }}>
                {game.category}
              </span>
              <p className="lead-copy mt-3">{game.summary}</p>
              <a className="button is-brand is-medium mt-4" href={game.play}>
                ▶ Start game
              </a>
              <p className="game-controls">{game.controls}</p>
            </div>
          </div>

          <div className="game-details">
            <section>
              <h2 className="section-title">Gameplay</h2>
              <ul className="game-list">
                {game.gameplay.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="section-title">What you can customize</h2>
              <ul className="game-list">
                {game.customizable.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-6">
            <h2 className="section-title">Use cases</h2>
            <div className="tags">
              {game.useCases.map(item => (
                <span className="tag is-medium game-usecase" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="section-title">Under the hood</h2>
            <ul className="game-list">
              <li>
                <strong>Technology:</strong> {game.tech}
              </li>
              <li>
                <strong>License:</strong> {game.license} — open source, can be used and modified for commercial
                projects.
              </li>
              <li>
                <strong>Source code:</strong>{' '}
                <a href={game.repo} target="_blank" rel="noreferrer">
                  {game.repo.replace('https://', '')}
                </a>
              </li>
            </ul>
          </section>

          <div className="game-cta">
            <a className="button is-brand is-medium" href={game.play}>
              ▶ Start game
            </a>
            <Link className="button is-medium" href="/contact/">
              Customize it for my company
            </Link>
            <Link className="button is-medium is-white" href="/games/">
              ← All games
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
