export const siteUrl = 'https://ad-ventures.cc'

export const siteName = 'AD Ventures'

export const siteTitle = 'AD Ventures — Open source, ventures, web technology and AI'

export const siteDescription =
  'AD Ventures builds fast, secure web solutions with Next.js and React, and writes about open source, free software, venture capital, AI technologies (Anthropic Claude, OpenAI ChatGPT, Mistral AI, Gemini), Nextcloud, sovereign cloud and the CLOUD Act.'

export const siteKeywords = [
  'open source',
  'free software',
  'ventures',
  'venture capital',
  'startups',
  'web technology',
  'Next.js',
  'React',
  'Jamstack',
  'AI technologies',
  'Anthropic Claude',
  'OpenAI ChatGPT',
  'Mistral AI',
  'Google Gemini',
  'LLM',
  'Nextcloud',
  'sovereign cloud',
  'CLOUD Act',
  'digital sovereignty',
  'GDPR',
]

export const author = {
  name: 'Adrien Lopez',
  url: `${siteUrl}/about/`,
}

export const sameAs = ['https://github.com/ado-san']

export const feedAlternate = {
  'application/rss+xml': [{ url: '/feed.xml', title: `${siteName} blog` }],
}

export function absoluteUrl(pathname = '/') {
  return new URL(pathname, siteUrl).toString()
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: `${siteUrl}/`,
        logo: absoluteUrl('/img/ad-ventures-logo.png'),
        description: siteDescription,
        foundingDate: '2012',
        sameAs,
        knowsAbout: siteKeywords,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: absoluteUrl('/contact/'),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        description: siteDescription,
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }
}

// Per-page metadata: child openGraph/twitter objects replace the layout's, so
// they are rebuilt here with the shared defaults.
export function pageMetadata({
  title,
  description = siteDescription,
  path,
  image = '/img/og-image.jpg',
  type = 'website',
  keywords,
  openGraph = {},
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteTitle

  return {
    ...(title ? { title } : {}),
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path, types: feedAlternate },
    openGraph: {
      type,
      siteName,
      locale: 'en_US',
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, alt: title || siteName }],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
