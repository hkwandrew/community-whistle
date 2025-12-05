import { useState } from 'react'
import { IconChevronSmall } from './Icons'

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
]

const LanguageSelect = ({ language = 'en', onChange = () => { }, inverse = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentOption = LANGUAGE_OPTIONS.find((option) => option.code === language)
  const currentLabel = currentOption ? currentOption.code.toUpperCase() : 'EN'

  const handleSelect = (code) => {
    if (code !== language) {
      onChange(code)
    }
    setMenuOpen(false)
  }

  return (
    <div
      className={`language-select ${inverse ? 'inverse' : ''}`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      onFocus={() => setMenuOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false)
        }
      }}
    >
      <button
        className="language-select__trigger roboto-400 text-box"
        type="button"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
      >
        <span className="language-select__label roboto-400 text-box">{currentLabel}</span>
        <IconChevronSmall />
      </button>
      <ul className="language-select__menu" role="menu" hidden={!menuOpen}>
        {LANGUAGE_OPTIONS.map((option) => (
          <li key={option.code} role="none">
            <button
              type="button"
              className={`language-select__option ${language === option.code ? 'is-active' : ''} roboto-400`}
              role="menuitemradio"
              aria-checked={language === option.code}
              onClick={() => handleSelect(option.code)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSelect
