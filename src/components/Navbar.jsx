import { useState } from 'react'
import HotlineButton from './HotlineButton'
import LanguageSelect from './LanguageSelect'
import { IconMenu, IconClose, IconArrow } from './Icons'

const Navbar = ({
  navLinks,
  activeNav,
  logoImage,
  onNavClick = () => { },
  language = 'en',
  onLanguageChange = () => { },
  hotlineLabel = 'Find a hotline'
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navListId = 'primary-nav-links'

  const handleLinkClick = (href) => {
    onNavClick(href)
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <div className={`nav-wrapper ${menuOpen ? 'is-open' : ''}`}>
      <header className="nav-bar">
        <div className="nav-logo" aria-hidden="true">
          <img src={logoImage} alt="Community whistle logo" />
        </div>
        <nav aria-label="Primary navigation">
          <ul className="nav-links" id={navListId}>
            {navLinks.map((link) => (
              <li key={link.href} className="nav-link">
                <a
                  className={`${activeNav === link.href ? 'is-active' : ''} roboto-400 text-box`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <LanguageSelect language={language} onChange={onLanguageChange} />
          <HotlineButton size="small">
            {hotlineLabel}
          </HotlineButton>
          <button
            type="button"
            className="nav-menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={navListId}
            onClick={toggleMenu}
          >
            <IconMenu />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-menu__top">
          <div className="nav-logo" aria-hidden="true">
            <img src={logoImage} alt="Community whistle logo" />
          </div>
          <button
            type="button"
            className="nav-close-button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <IconClose />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-links" id={`${navListId}-mobile`}>
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-nav-item">
                <a
                  className={`mobile-nav-link roboto-400 text-box ${activeNav === link.href ? 'is-active' : ''}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span className="mobile-nav-link__arrow" aria-hidden="true">
                    {activeNav === link.href ? <IconArrow /> : null}
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <HotlineButton className="mobile-hotline">
          {hotlineLabel}
        </HotlineButton>
        <div className="mobile-language">
          <LanguageSelect language={language} onChange={onLanguageChange} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
