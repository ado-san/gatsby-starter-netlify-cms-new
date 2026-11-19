# Games hosted on ad-ventures.cc/games/

Each game is a **prebuilt static bundle** committed in `next-preview/public/play/<slug>/`
and served as-is by Netlify at `https://ad-ventures.cc/play/<slug>/`.
The catalogue (texts, logos, links) lives in `next-preview/lib/games.js`;
logos are in `next-preview/public/game-logos/`.

| Slug | Source | How it was built |
|---|---|---|
| `memory` | [leftstick/vue-memory-game](https://github.com/leftstick/vue-memory-game) (MIT) | In `vite.config.ts` set `base: './'`, then `pnpm install && pnpm build`; copy `dist/` |
| `story` | [Monogatari/Monogatari](https://github.com/Monogatari/Monogatari) v2.8.1 (MIT) | Starter project from `dist/` (engine `monogatari.js` + `.css`, no debug/source maps), `ServiceWorkers: false`, `Orientation: 'any'` (playable in portrait). The story is in `public/play/story/js/script.js` — edit it directly. Mobile layout (title, big menu/choice buttons, readable text box, quick menu) is at the end of `style/main.css` |
| `rpg` | [rpgjs/starter#v5](https://github.com/rpgjs/starter/tree/v5) — RPG-JS v5 (MIT) | Copy the files in `games/rpg/` over the starter: `event.ts` and `player.ts` → `src/modules/main/`, `config.client.ts` → `src/config/` (enables `withMobile()`: virtual joystick + A/B buttons on touch devices), `index.html` → root. Then `npm install && NODE_ENV=production npx vite build --base /play/rpg/` (in Git Bash prefix with `MSYS_NO_PATHCONV=1`, otherwise the base becomes a Windows path); copy `dist/` (keep `LICENSE`) |
| `2048` | [gabrielecirulli/2048](https://github.com/gabrielecirulli/2048) (MIT) | Copy `index.html js style meta favicon.ico`; the "official version" note was replaced |
| `wordquest` | [ado-san/WordQuestEntreprise](https://github.com/ado-san/WordQuestEntreprise) (MIT) — copy of sutomtom with a tech & business word list | `npm ci && GENERATE_SOURCEMAP=false PUBLIC_URL=/play/wordquest npx react-scripts build`; copy `build/` |

To add a game: build it with a base path of `/play/<slug>/` (or relative `./`),
copy the output to `next-preview/public/play/<slug>/`, add a logo and an entry in `lib/games.js`.
