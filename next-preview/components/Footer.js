import Link from 'next/link'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ado-san', image: '/img/github-icon.svg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrien-lopez/', image: '/img/social/linkedin.svg' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="Ad Ventures Limited home">
            <img className="footer-logo" src="/img/ad-ventures-logo-short.png" alt="Ad Ventures Limited" />
          </Link>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/blog/">Blog</Link>
          <Link href="/about/">About</Link>
          <Link href="/products/">Products</Link>
          <Link href="/games/">Games</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <div className="footer-socials" aria-label="Social media">
          {socialLinks.map(item => (
            <a
              className="social-link"
              href={item.href}
              key={item.label}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              title={item.label}
            >
              <img src={item.image} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2012–{new Date().getFullYear()} Ad Ventures Limited. All rights reserved.</p>
        <nav className="footer-legal" aria-label="Legal">
          <Link href="/terms/">Terms of use</Link>
          <Link href="/privacy/">Privacy policy</Link>
        </nav>
      </div>
    </footer>
  )
}
