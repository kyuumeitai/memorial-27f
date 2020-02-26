import React from 'react'

const WPVideo = ({ block }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPVideo