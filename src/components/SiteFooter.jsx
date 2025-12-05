import HotlineButton from './HotlineButton'
import LanguageSelect from './LanguageSelect'

const SiteFooter = ({
  prompt = 'Has someone in your family been detained by agents or are you a witness of a raid in your community?',
  hotlineLabel = 'Find a Hotline',
  language = 'en',
  onLanguageChange = () => { }
}) => {
  return (
    <footer className="site-footer">
      <p>
        {prompt}
      </p>
      <div className="footer-actions">
        <HotlineButton variant="light">{hotlineLabel}</HotlineButton>
        <LanguageSelect language={language} onChange={onLanguageChange} inverse />
      </div>
    </footer>
  )
}

export default SiteFooter
