import React from 'react'
import { StACFAuthor } from './style.css'

const ACFAuthor = ({ author }) => {
  if(!author) {
    return null
  }
  return (
    <StACFAuthor>
      Por: <strong>{author}</strong>
    </StACFAuthor>
  )
}

export default ACFAuthor