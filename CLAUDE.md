# CLAUDE.md — ad-ventures.cc

Context for Claude Code working on this repository. Owner: Adrien Lopez (GitHub `ado-san`).
Talk to the owner in French; site content is in English.

## Working environment

- Work happens **locally** on Windows (Claude Code desktop), in `C:\Users\Komal\Documents\ad-ventures\`
  (this repo + `WordQuestEntreprise`). Node 22+, `gh` authenticated as `ado-san`.
  A Codespace (devcontainer: Node 22 + Claude Code) still works as a fallback.
- `master` = production. Work on a branch and open a PR.
- Netlify: production site is `elaborate-tulumba-d50ffa` (gmail account, owns ad-ventures.cc), production branch
  `master`, auto-deploys and posts the PR deploy previews. The old site `brave-liskov-d20cf2` (former lilo.org
  account) is disabled and kept as a backup.
- www → apex is done by Netlify's domain alias redirect, which runs before `_redirects`: host rules for
  `www.ad-ventures.cc` in `_redirects` are never applied, so don't add them.

## Stack

- `next-preview/` — Next.js 16 App Router, **static export** (`output: 'export'`, `trailingSlash: true`), Bulma 1, React 19.
- `netlify.toml` — base `next-preview`, publish `out`, Node 22, plus an `ignore` command so that changes in
  `src/` and `static/` (CMS posts and images, outside the base directory) still trigger a build.
- Content in `src/pages/**/*.md` (Decap CMS at `/admin/`), images in `src/img` + `static/img`
  (copied to `next-preview/public/img` by `scripts/sync-assets.mjs` — never put files in `public/img` by hand).
- Shared SEO helpers in `next-preview/lib/site.js` (`pageMetadata`, `breadcrumbJsonLd`).

```bash
cd next-preview && npm ci
npm run dev     # http://localhost:3001
npm run build   # static export in out/
```

## Games section (merged in PR #5)

Pages:
- `/games/` — `next-preview/app/games/page.js`: one card per game (logo, category, gameplay, customization).
- `/games/<slug>/` — `next-preview/app/games/[slug]/page.js`: gameplay, what you can customize, use cases,
  tech/license/source, **Start game** button.
- Catalogue data: `next-preview/lib/games.js`. Logos: `next-preview/public/game-logos/<slug>.svg`.
- "Games" link in Navbar, Footer and sitemap. Styles: `/* Games */` block at the end of `app/globals.css`.

Playable games are **prebuilt static bundles** committed in `next-preview/public/play/<slug>/`
(served at `/play/<slug>/`). How each one was built: `games/README.md`.

| Slug | Game | Source |
|---|---|---|
| `memory` | Memory | leftstick/vue-memory-game (Vue 3) |
| `story` | Onboarding Story (visual novel, demo "first day at Nova Corp" + phishing test) | Monogatari 2.8 — story in `public/play/story/js/script.js` |
| `rpg` | Quest RPG (NPC with a security quiz and badge) | rpgjs/starter#v5 — custom files in `games/rpg/` |
| `2048` | 2048 | gabrielecirulli/2048 |
| `wordquest` | WordQuest Entreprise (6-letter tech & business word of the day) | ado-san/WordQuestEntreprise |

Decisions already made:
- ClassQuiz was **dropped** (needs a server: Python + PostgreSQL + Redis + Meilisearch; not possible on Netlify).
- Monogatari chosen over WebGAL (lighter).
- SuTomTom replaced by WordQuest Entreprise (its word list had personal names and a swear word).
- Avoid "Wordle" in product names (New York Times trademark).

To add a game: build it with base path `/play/<slug>/` (or relative `./`), copy the output to
`next-preview/public/play/<slug>/`, add a logo and an entry in `lib/games.js`, document it in `games/README.md`.

## Open items

- Games bundles add ~13 MB to the repo (RPG-JS 6.5 MB, Monogatari 3.5 MB).
- Ideas: brand the Monogatari main menu, add more WordQuest words (147 words ≈ 5 months from 2026-11-18).
