import Link from 'next/link'

export default function GameCard({ game, headingLevel = 'h2' }) {
  const Heading = headingLevel

  return (
    <Link className="game-card" href={`/games/${game.slug}/`}>
      <div className="game-card__head">
        <img className="game-logo" src={game.logo} alt="" width="72" height="72" />
        <div>
          <span className="game-tag" style={{ '--tag': game.color }}>
            {game.category}
          </span>
          <Heading className="game-card__title">{game.title}</Heading>
        </div>
      </div>
      <p className="game-card__text">
        <strong>Gameplay: </strong>
        {game.tagline}
      </p>
      <p className="game-card__text">
        <strong>Customizable for your company: </strong>
        {game.customizable[0]}
      </p>
      <span className="game-card__more">More info &amp; play →</span>
    </Link>
  )
}
