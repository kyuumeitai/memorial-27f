import React from 'react'
import { StACFExcerpt } from './style.css'

const ACFExcerpt = ({ block }) => {
  return (
    <StACFExcerpt dangerouslySetInnerHTML={{ __html: block.attrs.data.bajada }} />
  )
}

export default ACFExcerpt