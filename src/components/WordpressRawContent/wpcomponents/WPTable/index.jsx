import React from 'react'
import { StWPTable } from './style.css'

const WPTable = ({ block }) => {
  return (
    <StWPTable dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPTable