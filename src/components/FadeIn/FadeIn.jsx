import { createElement } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

function FadeIn({ as: Component = 'div', className = '', children, ...rest }) {
  const { ref, isVisible } = useFadeIn()

  return createElement(
    Component,
    { ref, className: `fadeIn ${isVisible ? 'visible' : ''} ${className}`.trim(), ...rest },
    children
  )
}

export default FadeIn
