import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StWPMore } from './style.css'

const WPMore = ({ slug, single, bgColor }) => {
  if(single) return null
  return (
    <StWPMore to={`/${slug}/`} bgColor={bgColor}>
      <span>Ver más</span>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </StWPMore>
  )
}

export default WPMore