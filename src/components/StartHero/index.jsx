import React from 'react'
import get from 'lodash/get'
import VideoHero from '@/components/VideoHero'
import GetByWPID from '@/queries/GetByWPID'

const StartHero = () => {
  const startPost = GetByWPID(3858)

  if (!startPost) {
    return null
  }

  return (
    <VideoHero post={startPost} home={true}></VideoHero>
  )
}

export default StartHero
