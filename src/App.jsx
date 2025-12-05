import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import { contentByLanguage, heroImage, localResources, logoImage } from './data/siteContent'
import CodesSection from './sections/CodesSection'
import ContactSection from './sections/ContactSection'
import CreditSection from './sections/CreditSection'
import GuidanceSections from './sections/GuidanceSections'
import HeroSection from './sections/HeroSection'
import ResourcesSection from './sections/ResourcesSection'
import StatementSection from './sections/StatementSection'
import ListSection from './components/ListSection'

function App() {
  const [language, setLanguage] = useState('en')
  const content = contentByLanguage[language] || contentByLanguage.en
  const [activeNav, setActiveNav] = useState(content.navLinks[0]?.href)
  const [primaryGuidance, ...additionalGuidance] = content.guidanceSections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          const nextActive = `#${visibleEntries[0].target.id}`
          setActiveNav((prev) => (prev !== nextActive ? nextActive : prev))
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    )

    const targets = content.navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    targets.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [content.navLinks])

  const handleNavClick = (href) => setActiveNav(href)
  const handleLanguageChange = (nextLanguage) => setLanguage(nextLanguage)

  return (
    <div className="page">
      <Navbar
        activeNav={activeNav}
        navLinks={content.navLinks}
        logoImage={logoImage}
        onNavClick={handleNavClick}
        language={language}
        onLanguageChange={handleLanguageChange}
        hotlineLabel={content.navHotlineLabel}
      />
      <main className="content">
        <HeroSection imageSrc={heroImage} titleLines={content.hero.titleLines} />
        {primaryGuidance && <ListSection section={primaryGuidance} />}
        <CodesSection codes={content.whistleCodes} title={content.codesSectionTitle} />
        <StatementSection lines={content.statement.lines} />
        <GuidanceSections sections={additionalGuidance} />
        <ResourcesSection
          localResources={localResources}
          title={content.resources.title}
          intro={content.resources.intro}
          toggleLabel={content.resources.toggleLabel}
          hotlineLabel={content.hotlineLabel}
        />
        <ContactSection copy={content.contact} />
        <CreditSection caption={content.credit.caption} imageAlt={content.credit.imageAlt} />
      </main>
      <SiteFooter
        prompt={content.footer.prompt}
        hotlineLabel={content.footer.hotlineLabel}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </div>
  )
}

export default App
