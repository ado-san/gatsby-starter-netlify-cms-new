'use client'

import { useState } from 'react'
import Link from 'next/link'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ado-san', image: '/img/github-icon.svg' },
  { label: 'Twitter', href: 'https://twitter.com', image: '/img/social/twitter.svg' },
  { label: 'Instagram', href: 'https://instagram.com', image: '/img/social/instagram.svg' },
  { label: 'Mastodon', href: 'https://mastodon.com', image: '/img/social/mastodon.svg' },
]

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar is-transparent container" aria-label="Main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/" title="AD Ventures home">
            <img className="brand-mark" src="/img/ad-ventures-logo.png" alt="AD Ventures" />
          </Link>
          <button
            className={`navbar-burger${menuOpen ? ' is-active' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu${menuOpen ? ' is-active' : ''}`}>
          <div className="navbar-start ml-auto">
            {navigation.map(item => (
              <Link
                className="navbar-item"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            {socialLinks.map(item => (
              <a
                className="navbar-item social-link"
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
      </nav>
    </header>
  )
}
