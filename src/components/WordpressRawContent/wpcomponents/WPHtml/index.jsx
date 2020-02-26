import React from 'react'
import { StWPHtml } from './style.css'

const WPHtml = ({ block }) => {
  const { attrs } = block
  const blockclasses = attrs.className || ''

  return (
    <StWPHtml className={blockclasses} dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPHtml