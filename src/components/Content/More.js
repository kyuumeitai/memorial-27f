import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './style.css'

const More = () => (
  <Button>
    <span>Ver más</span>
    <FontAwesomeIcon icon={['fas', 'chevron-right']} />
  </Button>
)

export default More