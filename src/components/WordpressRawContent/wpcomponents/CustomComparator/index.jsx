import React, { useState, useEffect } from 'react'
import ReactCompareImage from 'react-compare-image'
import FindImage from '@/components/Image/findimage'
import get from 'lodash/get'
import { StCustomComparator } from './style.css'

const imgfilterer = imgstring => {
  const myRegex = /<img[^>]+src="([^">]+)"/g;
  const res = myRegex.exec(imgstring)
  if(res && res.length > 0) {
    return res[1]
  }
  return null
}

const imgarrayextractor = block => {
  const ble = []
  block.map((sblock) => {

    if (sblock.blockName === 'core/image') {
      const originalurl = imgfilterer(sblock.innerHTML)
      if (originalurl) {
        ble.push(originalurl)
      }
    }
    return null
  })
  return ble
}

const CustomComparator = ({ block }) => {
  const arr = imgarrayextractor(block)
  if(arr.length !== 2) {
    return null
  }
  const img1 = get(FindImage(arr[0]), 'node.imageFile.publicURL')
  const img2 = get(FindImage(arr[1]), 'node.imageFile.publicURL')
  console.log('>>>images', img1, img2)
  return (
    <StCustomComparator>
      <ReactCompareImage leftImage={img1} rightImage={img2} />
    </StCustomComparator>
  )
}

export default CustomComparator