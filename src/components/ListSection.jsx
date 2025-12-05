import { IconCheck } from './Icons'

function ListSection({ section }) {
  if (!section) return null

  const { id, title, intro, items = [], footer } = section

  return (
    <section id={id} className="panel list-panel">
      <h2 className="section-title archivo-800">{title}</h2>
      {intro && <p className="body-large">{intro}</p>}
      <ul className="list-items">
        {items.map((item) => (
          <li key={item} className="list-item">
            <IconCheck width={28} height={28} />
            <span className="body-medium roboto-400">{item}</span>
          </li>
        ))}
      </ul>
      {footer && (
        <p className="underline-callout archivo-800">{footer}</p>
      )}
    </section>
  )
}

export default ListSection
