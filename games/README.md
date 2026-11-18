# Games hosted on ad-ventures.cc/games/

Each game is a **prebuilt static bundle** committed in `next-preview/public/play/<slug>/`
and served as-is by Netlify at `https://ad-ventures.cc/play/<slug>/`.
The catalogue (texts, logos, links) lives in `next-preview/lib/games.js`;
logos are in `next-preview/public/game-logos/`.

| Slug | Source | How it was built |
|---|---|---|
| `memory` | [leftstick/vue-memory-game](https://github.com/leftstick/vue-memory-game) (MIT) | In `vite.config.ts` set `base: './'`, then `pnpm install && pnpm build`; copy `dist/` |
| `story` | [Monogatari/Monogatari](https://github.com/Monogatari/Monogatari) v2.8.1 (MIT) | Starter project from `dist/` (engine `monogatari.js` + `.css`, no debug/source maps), `ServiceWorkers: false`. The story is in `public/play/story/js/script.js` — edit it directly |
| `rpg` | [rpgjs/starter#v5](https://github.com/rpgjs/starter/tree/v5) — RPG-JS v5 (MIT) | Replace `src/modules/main/event.ts` and `player.ts` with the files in `games/rpg/`, then `npm install && NODE_ENV=production npx vite build --base /play/rpg/`; copy `dist/` |
| `2048` | [gabrielecirulli/2048](https://github.com/gabrielecirulli/2048) (MIT) | Copy `index.html js style meta favicon.ico`; the "official version" note was replaced |
| `sutomtom` | [ado-san/sutomtom](https://github.com/ado-san/sutomtom) (MIT) | `npm ci && GENERATE_SOURCEMAP=false PUBLIC_URL=/play/sutomtom npx react-scripts build`; copy `build/` |

To add a game: build it with a base path of `/play/<slug>/` (or relative `./`),
copy the output to `next-preview/public/play/<slug>/`, add a logo and an entry in `lib/games.js`.
