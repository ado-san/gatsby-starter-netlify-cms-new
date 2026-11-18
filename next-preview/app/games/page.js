import Link from 'next/link'
import GameCard from '../../components/GameCard'
import JsonLd from '../../components/JsonLd'
import { games } from '../../lib/games'
import { breadcrumbJsonLd, pageMetadata, siteName } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Games for companies: memory, adventure, puzzle and word games',
  description:
    'Play open source browser games that AD Ventures can brand and customize for your company: memory, visual novel, RPG, 2048 and word guessing games for events, onboarding and marketing.',
  path: '/games/',
  keywords: ['gamification', 'serious games', 'branded games', 'onboarding game', 'memory game', 'visual novel', 'RPG', '2048', 'word game'],
})

export default function GamesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: siteName, path: '/' },
          { name: 'Games', path: '/games/' },
        ])}
      />
      <header className="page-heading">
        <div className="page-heading__inner">
          <p className="section-kicker">AD Ventures</p>
          <h1>Games for your company</h1>
        </div>
      </header>
      <section className="section-band">
        <div className="content-width">
          <p className="lead-copy">
            Play these open source browser games, then imagine them with your logo, your products and your
            content. AD Ventures customizes and hosts them for events, onboarding, training and marketing
            campaigns.
          </p>
          <div className="game-grid">
            {games.map(game => (
              <GameCard game={game} key={game.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-band section-band--wash">
        <div className="content-width">
          <h2 className="section-title">Want one of these games with your brand?</h2>
          <p className="lead-copy">
            Tell me about your audience and your goal (event, onboarding, product launch…). I will adapt the
            game, its content and its look, and put it online on your website or on a dedicated domain.
          </p>
          <Link className="button is-brand mt-4" href="/contact/">
            Contact me
          </Link>
        </div>
      </section>
    </>
  )
}
