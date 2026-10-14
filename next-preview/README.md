# AD Ventures Next preview

This isolated Next.js app reads its pages and blog posts directly from the existing `../src/pages` Markdown files. It copies the original image assets from `../static/img` and `../src/img` into `public/img` before development and production builds.

Use Node.js 22:

```bash
npm install
npm run dev
```

The beta runs on port 3001. To create the static Netlify preview build, run `npm run build`; Netlify should use `next-preview` as the site base directory and publish `out`.

The admin is available at `/admin/` and uses the existing Decap collections. Netlify Identity and Git Gateway must be enabled for the Netlify site, and editors must be invited through Netlify Identity. Preview builds target their current Git branch; production builds target `master`. The preview cannot change production content.
