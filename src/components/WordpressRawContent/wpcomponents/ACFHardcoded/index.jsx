import React from 'react'
import { StACFHardcoded } from './style.css'

const ACFHardcoded = ({ block }) => {
  const { attrs: { data: { hardcodedid } = {} } = {} } = block

  if (!hardcodedid) {
    return null
  }
  return (
    <StACFHardcoded className={hardcodedid}>
    </StACFHardcoded>
  )
}

export default ACFHardcoded