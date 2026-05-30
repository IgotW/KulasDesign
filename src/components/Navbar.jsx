import { useState, useEffect } from 'react'
import './Navbar.css'

const defaultLinks = [
  { href: '#services', label: 'Services' },
  { href: '#difference', label: 'Why Us' },
  { href: '#categories', label: 'Products' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ links = defaultLinks }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`topbar${scrolled ? ' topbar-scrolled' : ''}`}>
      <a href="#" className="brand">
        <img src="/src/assets/kd_logo.png" alt="Kulas Design" className="brand-logo" />
        <div className="brand-text-wrap">
          <span className="brand-name">Kulas Design</span>
          <span className="brand-sub">Inc.</span>
        </div>
      </a>

      <nav className="nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">Request a Quote</a>
      </nav>

      <button
        className={`burger${menuOpen ? ' burger-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="mobile-link" onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={handleLinkClick}>Request a Quote</a>
      </div>
    </header>
  )
}

export default Navbar