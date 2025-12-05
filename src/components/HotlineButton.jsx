import { hotlineUrl } from '../data/siteContent'

const HotlineButton = ({ variant = 'solid', size = 'large', children = 'Find a Hotline', href = hotlineUrl, className = '' }) => {
  const classes = ['hotline-button', variant, size, className, 'archivo-800',].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default HotlineButton
