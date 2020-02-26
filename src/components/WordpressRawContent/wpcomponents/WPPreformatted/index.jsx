import React from 'react'
import { StWPPreformatted } from './style.css'

const WPPreformatted = ({ block }) => {
  return (
    <StWPPreformatted dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPPreformatted