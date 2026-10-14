import 'bulma/css/bulma.min.css'
import Script from 'next/script'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://ad-ventures.cc'),
  title: 'Ad Ventures - Digital Solutions',
  description:
    'Ad Ventures website is built with Gatsby, and Netlify CMS. It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  icons: {
    icon: '/img/ad-ventures-favicon-32x32.png',
    apple: '/img/ad-ventures-apple-touch-icon.png.png',
  },
  openGraph: {
    type: 'website',
    title: 'Ad Ventures - Digital Solutions',
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
