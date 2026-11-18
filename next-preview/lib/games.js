// Games catalogue for /games/ and /games/[slug]/.
// Each game is a static build served from /public/play/<slug>/ (see /games/README.md at the repo root).

export const games = [
  {
    slug: 'memory',
    title: 'Memory',
    category: 'Memory',
    logo: '/game-logos/memory.svg',
    color: '#3b5ea8',
    tagline: 'Flip the cards and find all the pairs as fast as you can.',
    summary:
      'A classic card-matching game. Players flip two cards at a time and try to find every pair in the fewest seconds.',
    gameplay: [
      'Click a card to flip it, then click a second card.',
      'If both cards match, they stay face up; otherwise they flip back.',
      'Find all the pairs to finish the game. Your best time is saved in the browser.',
    ],
    customizable: [
      'Card images: your products, team members, logos or brand values.',
      'Card back, colours and fonts to match your visual identity.',
      'Grid size and number of pairs to adjust the difficulty.',
      'End screen message with a call to action (discount code, contact form, landing page).',
    ],
    useCases: ['Trade shows and events', 'Product launches', 'Onboarding (learn faces and names)', 'Newsletter engagement'],
    tech: 'Vue 3 + Vite',
    license: 'MIT',
    repo: 'https://github.com/leftstick/vue-memory-game',
    play: '/play/memory/',
    controls: 'Mouse or touch — works on mobile.',
  },
  {
    slug: 'story',
    title: 'Onboarding Story',
    category: 'Adventure',
    logo: '/game-logos/story.svg',
    color: '#6a4cc2',
    tagline: 'An interactive visual novel where every choice changes the story.',
    summary:
      'A branching story in the style of a visual novel. The demo plays the first day of a new employee, with a phishing test along the way.',
    gameplay: [
      'Enter your name, then read the dialogues and click to continue.',
      'At key moments, choose what to do: each choice leads to a different scene.',
      'Wrong answers are explained and you can try again, so players learn while playing.',
      'Save, load, auto-play and dialogue history are built in.',
    ],
    customizable: [
      'Characters, names, portraits and backgrounds (your office, your team, your mascot).',
      'The whole scenario: onboarding, compliance training, sales pitch, customer journey.',
      'Questions, choices and feedback messages, with scoring or badges.',
      'Music, sounds, videos and several languages.',
    ],
    useCases: ['Employee onboarding', 'Security and compliance training', 'Interactive product demos', 'Recruitment / employer branding'],
    tech: 'Monogatari (visual novel engine for the web)',
    license: 'MIT',
    repo: 'https://github.com/Monogatari/Monogatari',
    play: '/play/story/',
    controls: 'Mouse, touch or keyboard (Space / Enter to continue).',
  },
  {
    slug: 'rpg',
    title: 'Quest RPG',
    category: 'Adventure',
    logo: '/game-logos/rpg.svg',
    color: '#2f8f4e',
    tagline: 'Explore a 2D world, talk to characters and complete quests.',
    summary:
      'A 2D role-playing game in the browser. Walk around the map, meet characters, answer their questions and unlock badges.',
    gameplay: [
      'Move your hero with the arrow keys.',
      'Walk up to a character and press Space or Enter to talk.',
      'Answer the guide’s question to earn your first badge.',
      'Press Escape to open the menu.',
    ],
    customizable: [
      'Maps (made with the free Tiled editor): your office, your shop, your city.',
      'Characters, sprites and dialogues: your team, your mascot, your customers.',
      'Quests, quizzes, items and rewards linked to your training or marketing goals.',
      'Can grow into a multiplayer game (MMORPG mode) with the same code.',
    ],
    useCases: ['Gamified onboarding', 'Team building', 'Virtual events and showrooms', 'Training paths with quests'],
    tech: 'RPG-JS v5 (TypeScript, PixiJS) — standalone mode, runs fully in the browser',
    license: 'MIT',
    repo: 'https://github.com/RSamaium/RPG-JS',
    play: '/play/rpg/',
    controls: 'Keyboard: arrow keys to move, Space / Enter to interact, Escape for the menu. Best on desktop.',
  },
  {
    slug: '2048',
    title: '2048',
    category: 'Numbers',
    logo: '/game-logos/2048.svg',
    color: '#edc22e',
    tagline: 'Slide the tiles and merge them to reach 2048.',
    summary:
      'The famous sliding puzzle. Combine tiles with the same number until you reach the 2048 tile.',
    gameplay: [
      'Use the arrow keys (or swipe on mobile) to move all the tiles.',
      'Two tiles with the same number merge into one.',
      'A new tile appears after each move. Reach 2048 before the grid fills up.',
    ],
    customizable: [
      'Replace numbers with images: product range, career levels, customer journey steps.',
      'Colours, fonts and logo to match your brand.',
      'Target tile and grid size to make the game shorter or harder.',
      'Win and game-over screens with your message or promo code.',
    ],
    useCases: ['Brand awareness campaigns', 'Waiting rooms and kiosks', 'Social media challenges', 'Internal competitions'],
    tech: 'Vanilla JavaScript (no framework)',
    license: 'MIT',
    repo: 'https://github.com/gabrielecirulli/2048',
    play: '/play/2048/',
    controls: 'Arrow keys or swipe — works on mobile.',
  },
  {
    slug: 'wordquest',
    title: 'WordQuest Entreprise',
    category: 'Letters',
    logo: '/game-logos/wordquest.svg',
    color: '#22a45d',
    tagline: 'Guess the 6-letter tech & business word of the day in 6 tries.',
    summary:
      'A daily word guessing game with a tech and business vocabulary: find the hidden 6-letter word in six attempts using the colour hints after each try.',
    gameplay: [
      'Type a word and press Enter.',
      'Green: the letter is in the right place. Yellow: the letter is in the word but elsewhere. Grey: not in the word.',
      'Find the word in 6 tries. A new word is available every day.',
    ],
    customizable: [
      'Word list: your product names, industry vocabulary or company values.',
      'Word length, number of tries and alphabet (any language, accents, digraphs).',
      'Interface texts and translations (English and Spanish included).',
      'Colours, logo and share message.',
    ],
    useCases: ['Daily engagement on intranet or website', 'Learning a technical vocabulary', 'Language training', 'Marketing campaigns'],
    tech: 'React + TypeScript (based on an open source, any-language Wordle clone)',
    license: 'MIT',
    repo: 'https://github.com/ado-san/WordQuestEntreprise',
    play: '/play/wordquest/',
    controls: 'Keyboard or on-screen keyboard — works on mobile.',
  },
]

// Most recently added games first (the catalogue is kept in the order games were added).
export function getLatestGames(count = 3) {
  return [...games].reverse().slice(0, count)
}

export function getGame(slug) {
  return games.find(game => game.slug === slug)
}
