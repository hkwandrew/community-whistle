function HeroSection({ imageSrc, titleLines = [] }) {
  const [firstLine = 'Together,', secondLine = 'we keep our community safe.'] = titleLines

  return (
    <section className="panel hero-panel" aria-labelledby="hero-title">
      <h1 id="hero-title" className="display-title archivo-800">
        {firstLine}
        <br />
        {secondLine}
      </h1>
      <div className="hero-image" role="presentation">
        <img src={imageSrc} alt="Illustration of a whistle rallying a crowd" />
      </div>
    </section>
  )
}

export default HeroSection
