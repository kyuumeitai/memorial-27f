import React from 'react'
import { StWPBlockQuote } from './style.css'

const WPBlockQuote = ({ block }) => {
  return (
    <StWPBlockQuote dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPBlockQuote