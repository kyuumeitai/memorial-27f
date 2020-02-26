import React from 'react'
import get from 'lodash/get'
import { Heading } from './style.css'

const WPHeading = ({ block }) => {
  const align = get(block, 'attrs.align')
  return (
    <Heading align={align} dangerouslySetInnerHTML={{ __html: block.innerHTML }} />
  )
}

export default WPHeading