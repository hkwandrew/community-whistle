import { IconArrow } from '../components/Icons'

function CodesSection({ codes, title = 'Codes to Learn' }) {
  return (
    <section id="codes" className="panel codes-panel">
      <h2 className="section-title archivo-800">{title}</h2>
      {codes.map((code) => (
        <article key={code.title} className="code-card">
          <h3 className="code-title archivo-800">{code.title}</h3>
          <div className="code-rhythm">
            <p className="body-large roboto-400">{code.instruction}</p>
            <p className="rhythm roboto-900">{code.rhythm}</p>
          </div>
          <div className="code-details">
            {code.details.map((detail) => (
              <p key={detail} className="body-medium roboto-400">
                <IconArrow /> {detail}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}

export default CodesSection
