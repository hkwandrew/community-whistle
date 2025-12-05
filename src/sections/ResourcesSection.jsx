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
    <section id="resources" className="panel flex-container flex-dir-col">
      <h2 className="section-title archivo-800">{title}</h2>
      <p className="body-medium text-center roboto-400">
        {intro}
      </p>
      <HotlineButton>{hotlineLabel}</HotlineButton>
      <button
        type="button"
        className="resource-toggle text-center flex-container"
        aria-expanded={resourcesOpen}
        onClick={() => setResourcesOpen((prev) => !prev)}
      >
        <span className="body-xlarge archivo-800">{toggleLabel}</span>
        <IconChevron />
      </button>
      <ul className="local-resources" aria-label="Local resource cards" hidden={!resourcesOpen}>
        {localResources.map((city) => (
          <li className="local-resource-card">
            <a key={city.label} className="archivo-800" href={city.url} target="_blank" rel="noreferrer">
              {city.label}
              <IconCallMade />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourcesSection
