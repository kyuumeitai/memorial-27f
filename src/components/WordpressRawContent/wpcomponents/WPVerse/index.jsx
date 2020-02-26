import React from 'react'

const WPVerse = ({ block }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPVerse