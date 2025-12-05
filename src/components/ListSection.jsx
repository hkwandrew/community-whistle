import { IconCheck } from './Icons'

function ListSection({ section }) {
  if (!section) return null

  const { id, title, intro, items = [], footer } = section

  return (
    <section id={id} className="panel list-panel">
      <h2 className="section-title archivo-800">{title}</h2>
      {intro && (
        <p
          className="body-large roboto-400"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      )}
      <ul className="list-items">
        {items.map((item) => (
          <li key={item} className="list-item">
            <IconCheck width={28} height={28} />
            <span
              className="body-medium roboto-400"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </li>
        ))}
      </ul>
      {footer && (
        <p
          className="underline-callout body-xlarge archivo-800"
          dangerouslySetInnerHTML={{ __html: footer }}
        />
      )}
    </section>
  )
}

export default ListSection
