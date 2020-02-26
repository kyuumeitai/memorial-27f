import React from 'react'
import {StWPPullQuote} from './style.css'

const WPPullQuote = ({ block }) => {
  return (
    <StWPPullQuote dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPPullQuote