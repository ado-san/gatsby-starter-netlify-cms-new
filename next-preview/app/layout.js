import 'bulma/css/bulma.min.css'
import Script from 'next/script'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import {
  author,
  feedAlternate,
  organizationJsonLd,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from '../lib/site'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [author],
  creator: author.name,
  publisher: siteName,
  alternates: { types: feedAlternate },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/img/ad-ventures-favicon-32x32.png',
    apple: '/img/ad-ventures-apple-touch-icon.png.png',
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/img/og-image.jpg', alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/img/og-image.jpg'],
  },
  verification: {
    google: 'LB-fyo-R-__mhapozznmsScHKQyNYHnY6rGCQmeRKUs',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
