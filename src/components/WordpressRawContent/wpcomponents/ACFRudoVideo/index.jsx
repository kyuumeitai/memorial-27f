import React from 'react'
import get from 'lodash/get'
import VideoPlayer from '../../../VideoPlayer'
import { StACFVideo } from './style.css'

const ACFVideo = ({ block }) => {
  const rudoid = get(block, 'attrs.data.rudoid')

  if (!rudoid) return null

  const iframesrc = `https://rudo.video/vod/${rudoid}`

  return (
    <StACFVideo>
      <VideoPlayer iframe={iframesrc} noProportions />
    </StACFVideo>
  )
}

export default ACFVideo