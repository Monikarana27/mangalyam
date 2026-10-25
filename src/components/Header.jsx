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
      <a className="brand" href="#/" aria-label="Mangalyam home">
        <img src="/images/mangalyam-logo.png" alt="" width="56" height="56" />
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'Close' : 'Menu'}
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
            aria-current={route === href.slice(1) ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <HeaderActions />
    </header>
  )
}
