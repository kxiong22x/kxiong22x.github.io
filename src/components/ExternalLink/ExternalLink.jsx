import { forwardRef } from 'react'

const ExternalLink = forwardRef(function ExternalLink({ children, ...rest }, ref) {
  return (
    <a ref={ref} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
})

export default ExternalLink
