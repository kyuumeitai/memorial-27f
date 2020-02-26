import React, { useState } from 'react'
import Img from 'gatsby-image'
import FindLocalImage from './findlocalimage'

const LocalImage = ({filename, alt}) => {
  const [image, setImage] = useState(FindLocalImage(filename))

  if (!image) {
    return null
  }

  return <Img alt={alt ? alt : ''} sizes={image.node.childImageSharp.image} objectFit="cover" objectPosition="50% 50%" />

}

export default LocalImage;
