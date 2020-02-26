import React from 'react'
import Image from '../../Image'

import { Photo } from './style.css'

const HeroPhoto = ({image, hiddenPhoto, photoid}) => {
  return (
    <Photo hiddenPhoto={hiddenPhoto} photoid={photoid}>
      <Image originalurl={image} format="attached_images_in_acf" />
    </Photo>
  )
}

export default HeroPhoto