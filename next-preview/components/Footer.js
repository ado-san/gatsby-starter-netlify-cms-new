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
          <Link href="/" aria-label="AD Ventures home">
            <img className="footer-logo" src="/img/ad-ventures-logo-short.png" alt="AD Ventures" />
          </Link>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/blog/">Blog</Link>
          <Link href="/about/">About</Link>
          <Link href="/products/">Products</Link>
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
      <p className="footer-bottom">AD Ventures</p>
    </footer>
  )
}
