---
templateKey: blog-post
title: Building the fastest website of the world with ReactJS !!!
date: 2019-11-17T07:42:16.557Z
updated: 2026-10-15T08:00:00.000Z
description: >-
  Static site generation and the Jamstack changed how we build fast and secure
  websites. From Gatsby in 2019 to Next.js and React Server Components today,
  here is how this very site is built, and how you can get near-perfect
  performance with React, a headless CMS and a CDN.
featuredpost: true
featuredimage: /img/gatsby_blog-740x370.png
tags:
  - React
  - Next.js
  - Jamstack
  - Gatsby
  - web technology
  - performance
---
![Gatsby architecture](/img/gatsby-archi.png "Gatsby architecture")

In 2019 I explored a new way to build websites, more secure and much faster: **static site generators**. Instead of computing each page on a server when a visitor asks for it, you **pre-build** every page once and push the result to a global network of servers (a CDN), ready to be delivered instantly wherever your users are. This site has been built that way ever since, first with Gatsby, and now with **Next.js**.

## The Jamstack in a nutshell

![Jamstack architecture](/img/jamstack-archi.png "Jamstack architecture")

The term **Jamstack** (JavaScript, APIs, Markup) was popularised by Netlify. The idea:

- **Markup** is pre-rendered at build time into static HTML files.
- **JavaScript** adds interactivity in the browser.
- **APIs** handle dynamic features: forms, search, payments, authentication.
- **Git** is the single source of truth: every commit triggers a new build and deployment.

Benefits:

- **Speed.** Static files served from a CDN are as fast as the web can be.
- **Security.** No database or server-side code exposed to the public: the attack surface is tiny.
- **Scalability.** A traffic spike costs almost nothing: it's just files.
- **Developer experience.** Modern tools, previews for every pull request, instant rollbacks.

## 2019: Gatsby, React and GraphQL

My first version used [Gatsby](https://www.gatsbyjs.com/), a React-based framework that pulled content from Markdown files through a **GraphQL** data layer, optimised images automatically, and produced one of the fastest websites I had ever built, with perfect Lighthouse scores. Combined with **Netlify CMS** (now **Decap CMS**), non-developers could write articles in a friendly interface while every change was saved as a Git commit.

Gatsby was a pioneer, but the ecosystem moved on: after Netlify acquired Gatsby in 2023, development slowed down, and many projects, including this one, migrated to Next.js.

## 2026: Next.js, React Server Components and static export

The current version of AD Ventures runs on [**Next.js**](https://nextjs.org/) with the **App Router** and **React Server Components**:

- **Server Components** read the Markdown files directly at build time with Node.js: no GraphQL layer, no client-side data fetching, less JavaScript sent to the browser.
- **Static export** (`output: 'export'`) generates plain HTML files for every page, article and tag, deployed on Netlify's CDN.
- **Metadata API** generates titles, descriptions, Open Graph images, canonical URLs, a sitemap, a `robots.txt` and structured data (JSON-LD) for search engines and AI assistants.
- **Decap CMS** is still used to edit content, served at `/admin/` and authenticated with Netlify Identity.

The result: a site that loads in a fraction of a second, costs nothing to host and is easy to maintain.

## Tips for a really fast React website

1. **Render on the server or at build time.** Ship HTML, not empty `<div id="root">` pages waiting for JavaScript.
2. **Keep client components small.** Only interactive parts (menus, forms) need `'use client'`.
3. **Optimise images.** Use modern formats (WebP/AVIF), explicit dimensions and lazy loading.
4. **Use a CDN** and long cache headers for static assets.
5. **Measure.** Track Core Web Vitals (LCP, INP, CLS) with Lighthouse and real-user data.
6. **Think SEO from day one:** semantic HTML, one `h1` per page, clean URLs (ASCII slugs!), sitemap and structured data.

## Jamstack, React and AI

AI coding assistants such as **Claude**, **ChatGPT**, **Mistral** and **Gemini** are now very good at writing React and Next.js code, and frameworks publish documentation designed for them. A well-structured static site is also easier for AI search engines to read and cite: clean HTML, clear headings, a `llms.txt` file and structured data all help your content be understood by both humans and machines.

## Resources

- [Next.js documentation](https://nextjs.org/docs)
- [React documentation](https://react.dev/)
- [Jamstack.org](https://jamstack.org/)
- [Decap CMS](https://decapcms.org/)
- [Why you should be using the Jamstack (LogRocket)](https://blog.logrocket.com/why-you-should-be-using-jamstack/)
- [Modern Web Development on the Jamstack (O'Reilly, free ebook by Netlify)](https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf)
- [Sites statiques et Jamstack (in French, Buzut)](https://buzut.net/sites-statiques-et-jamstack-la-revolution-frontend/)

Curious about the AI side? Read our [overview of Claude, ChatGPT, Mistral AI and Gemini](/blog/2026-10-15-claude-chatgpt-mistral-gemini-ai-assistants-compared/).
