import React from 'react'
import { StEmbedFacebook } from './style.css'

const EmbedFacebook = ({ block }) => {
  return (
    <StEmbedFacebook>
      <h1>facebook</h1>
      <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
    </StEmbedFacebook>
  )
}

export default EmbedFacebook