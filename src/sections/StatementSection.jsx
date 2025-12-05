const StatementSection = ({ lines = ['Stay nonviolent.', 'Don’t stay silent.'] }) => {
  const [firstLine = 'Stay nonviolent.', secondLine = 'Don’t stay silent.'] = lines

  return (
    <section className="panel statement-panel" aria-live="polite">
      <p className="statement-heading archivo-800">{firstLine}</p>
      <p className="statement-heading archivo-800">{secondLine}</p>
    </section>
  )
}

export default StatementSection
