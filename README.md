# AD Ventures — ad-ventures.cc

Source of [ad-ventures.cc](https://ad-ventures.cc): a static Next.js website about open source, ventures, web technology, AI and sovereign cloud.

## Structure

- `next-preview/` — the Next.js (App Router) application, exported as static HTML (`output: 'export'`).
- `src/pages/**/*.md` — content (home, about, products and blog posts), edited with Decap CMS.
- `src/img/`, `static/img/` — images, copied to `next-preview/public/img` before each build.
- `static/admin/config.yml` — Decap CMS configuration, served at `/admin/`.
- `netlify.toml` — Netlify build settings (base `next-preview`, publish `out`).

## Development

Use Node.js 22 or later:

```bash
cd next-preview
npm install
npm run dev     # http://localhost:3001
npm run build   # static export in next-preview/out
```

## Content

Blog posts live in `src/pages/blog/` and are named `YYYY-MM-DD-ascii-slug.md`; the file name is the URL. Keep file names ASCII (titles can contain emojis). Old URLs are redirected in `next-preview/public/_redirects`.

## Contact form

The contact form uses Netlify Forms. The form is declared in `next-preview/public/__forms.html` so Netlify detects it at deploy time, and submitted with `fetch` from `next-preview/components/ContactForm.js`. Email notifications are configured in the Netlify UI (Forms → Form notifications).

## License

MIT, see [LICENSE](LICENSE).
