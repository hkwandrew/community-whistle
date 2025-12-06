import { useId } from 'react'

export const IconCheck = ({ width = 28, height = 28 }) => {
  const maskId = useId().replace(/:/g, '')

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <mask
        id={maskId}
        style={{ maskType: 'alpha', maskUnits: 'userSpaceOnUse' }}
        x="0"
        y="0"
        width="28"
        height="28"
      >
        <rect width="28" height="28" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M11.1417 21L4.4917 14.35L6.1542 12.6875L11.1417 17.675L21.8459 6.97083L23.5084 8.63333L11.1417 21Z"
          fill="#1E1E1E"
        />
      </g>
    </svg>
  )
}

export const IconArrow = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <mask id="mask0_11_1953" style={{ maskType: "alpha", maskUnits: "userSpaceOnUse" }} x="0" y="0" width="28" height="28">
      <rect width="28" height="28" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_11_1953)">
      <path d="M18.8709 15.1667H4.66669V12.8333H18.8709L12.3375 6.3L14 4.66667L23.3334 14L14 23.3333L12.3375 21.7L18.8709 15.1667Z" fill="#1C1B1F" />
    </g>
  </svg>
)

export const IconChevron = () => {
  const maskId = useId().replace(/:/g, '')

  return (
    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" fill="none">
      <mask id={maskId} style={{ maskType: "alpha", maskUnits: "userSpaceOnUse" }} x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M12 7.975L6 13.975L7.4 15.375L12 10.8L16.6 15.375L18 13.975L12 7.975Z" fill="#1E1E1E" />
      </g>
    </svg>
  )
}

export const IconChevronSmall = () => (
  <svg className="icon icon--chevron" viewBox="0 0 10 6" role="presentation" aria-hidden="true">
    <path d="M1 1.25 5 4.75l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconCallMade = () => {
  const maskId = useId().replace(/:/g, '')

  return (
    <svg className="icon" width="40" height="40" viewBox="0 0 40 40" role="presentation" aria-hidden="true" fill="none">
      <mask id={maskId} style={{ maskType: "alpha", maskUnits: "userSpaceOnUse" }} x="0" y="0" width="40" height="40">
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M9.00008 33.3335L6.66675 31.0002L26.0001 11.6668H15.0001V8.3335H31.6667V25.0002H28.3334V14.0002L9.00008 33.3335Z" fill="#1E1E1E" />
      </g>
    </svg>
  )
}

export const IconMenu = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <mask id="mask0_20_2044" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_20_2044)">
      <path d="M5 11.6667V8.33333H35V11.6667H5ZM5 31.6667V28.3333H35V31.6667H5ZM5 21.6667V18.3333H35V21.6667H5Z" fill="#1C1B1F" />
    </g>
  </svg>

)

export const IconClose = () => (
  <svg className="icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
