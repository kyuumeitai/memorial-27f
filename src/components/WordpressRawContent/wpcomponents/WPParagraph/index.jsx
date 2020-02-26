import React from 'react'
import { StWPParagraph } from './style.css'

const WPParagraph = ({ block }) => {
  return (
    <StWPParagraph dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPParagraph