import Link from 'next/link'
import { getAllPosts, getPage, formatDate } from '../lib/content'
import FeatureGrid from '../components/FeatureGrid'
import StoryGrid from '../components/StoryGrid'
import GameCard from '../components/GameCard'
import { getLatestGames } from '../lib/games'
import { pageMetadata } from '../lib/site'

export const metadata = pageMetadata({ path: '/' })

export default function HomePage() {
  const { frontmatter } = getPage('home')
  const posts = getAllPosts().slice(0, 4)
  const latestGames = getLatestGames(3)

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: `url("${frontmatter.image}")` }}
      >
        <div className="hero-inner">
          <h1 className="hero-title">{frontmatter.title}</h1>
          <p className="hero-subtitle">{frontmatter.subheading}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="content-width">
          <p className="section-kicker">Ad Ventures Limited</p>
          <h2 className="section-title">{frontmatter.mainpitch.title}</h2>
          <p className="lead-copy">{frontmatter.mainpitch.description}</p>
          <div className="home-work-copy">
            <h2 className="section-title">How do we work?</h2>
            <p className="lead-copy">{frontmatter.description}</p>
          </div>
          <FeatureGrid items={frontmatter.intro.blurbs} />
          <div className="has-text-centered mt-5">
            <Link className="button is-brand" href="/products/">
              See all products
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="content-width">
          <p className="section-kicker">Play, then make it yours</p>
          <h2 className="section-title">Latest games</h2>
          <p className="lead-copy">
            Open source browser games we customize with your brand and content for events, onboarding and
            marketing.
          </p>
          <div className="game-grid">
            {latestGames.map(game => (
              <GameCard game={game} headingLevel="h3" key={game.slug} />
            ))}
          </div>
          <div className="has-text-centered mt-5">
            <Link className="button is-brand" href="/games/">
              See all games
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band section-band--wash">
        <div className="content-width">
          <h2 className="section-title">Latest stories</h2>
          <StoryGrid posts={posts} />
          <div className="has-text-centered mt-5">
            <Link className="button is-brand" href="/blog/">
              Read more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
