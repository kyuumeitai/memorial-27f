import React from 'react'
import {StWPList} from './style.css'

const WPList = ({ block }) => {
  return (
    <StWPList dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPList