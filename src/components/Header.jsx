import { useRef, useState } from 'react'
import HeaderActions from './HeaderActions'

const navigation = [
  { label: 'Home', href: '#home' },
  // TODO: Add the corresponding sections before submission.
  { label: 'About us', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'Venues', href: '#services' },
  { label: 'Packages', href: '#services' },
  { label: 'Blog', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
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
      <a className="brand" href="#home" aria-label="Mangalyam home">
        <img
          src="/images/mangalyam-logo.png"
          alt=""
          width="56"
          height="56"
        />
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