import { useState } from 'react'
import HotlineButton from '../components/HotlineButton'
import { IconCallMade, IconChevron } from '../components/Icons'

function ResourcesSection({
  localResources,
  title = 'Resources',
  intro = 'Has someone in your family been detained by agents or are you a witness of an agent raid in your community?',
  toggleLabel = 'More local resources',
  hotlineLabel = 'Find a Hotline'
}) {
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <section id="resources" className="panel resource-panel">
      <h2 className="section-title archivo-800">{title}</h2>
      <p className="body-medium text-center">
        {intro}
      </p>
      <HotlineButton>{hotlineLabel}</HotlineButton>
      <button
        type="button"
        className="resource-toggle"
        aria-expanded={resourcesOpen}
        onClick={() => setResourcesOpen((prev) => !prev)}
      >
        <span className="underline-callout archivo-800">{toggleLabel}</span>
        <IconChevron />
      </button>
      <div className="local-resources" aria-label="Local resource cards" hidden={!resourcesOpen}>
        {localResources.map((city) => (
          <a key={city.label} className="local-resource-card archivo-800" href={city.url} target="_blank" rel="noreferrer">
            <p>{city.label}</p>
            <IconCallMade />
          </a>
        ))}
      </div>
    </section>
  )
}

export default ResourcesSection
