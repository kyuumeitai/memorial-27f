import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Image from '../../../Image'

const WPGallery = ({block}) => {
  try {
    const parsedhtml = ReactHtmlParser(block.innerHTML)
    const images = parsedhtml[0].props.children

    if (images.length <= 0){
      return null
    }

    const responsive = {
      0: { items: 1 },
      1024: {
        items: 3
      }
    }
    return null

  } catch(err){
    return null
  }
}

export default WPGallery