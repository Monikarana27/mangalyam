import { site } from '../config/site'
import { useRoute } from '../hooks/useRoute'
import { useRef, useState } from 'react'
import HeaderActions from './HeaderActions'

const navigation = [
  { label: 'Home', href: '#/' },
  { label: 'About us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Venues', href: '#/venues' },
  { label: 'Packages', href: '#/packages' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Contact', href: '#/contact' },
]

export default function Header() {
  const route = useRoute().split('?')[0]
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <a
        className="brand"
        href="#/"
        onClick={() => setMenuOpen(false)}
        aria-label={`${site.name} home`}
      >
        <img src="/images/mangalyam-logo.png" alt="" width="56" height="56" />
        <span className="brand-wordmark"><span>{site.name}</span><small>Celebrations, thoughtfully planned</small></span>
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

      <nav
        id="main-navigation"
        className={`navigation${menuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            aria-current={route === href.slice(1) || (href !== '#/' && route.startsWith(`${href.slice(1)}/`)) ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-controls" onClick={() => setMenuOpen(false)}>
        <HeaderActions />
      </div>
    </header>
  )
}
