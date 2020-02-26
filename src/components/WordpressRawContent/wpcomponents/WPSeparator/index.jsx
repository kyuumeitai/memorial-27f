import React from 'react'
import {StWPSeparator} from './style.css'

const WPSeparator = ({ block }) => {
  return (
    <StWPSeparator dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPSeparator