import React from 'react'
import VideoPlayerMP4 from '@/components/VideoPlayerMP4'
import { StVertiginosaVideo, StVertiginosaZoomer } from './style.css'
import poster from '@/images/poster.jpg'

const VertiginosaVideo = ({ video }) => {
  const {video_mp4_url, video_format} = video
  return (
    <StVertiginosaVideo>
      <StVertiginosaZoomer>
        <VideoPlayerMP4 videourl={video_mp4_url} format={video_format} autoplay={true} controls={false} muted={true} poster={poster} />
      </StVertiginosaZoomer>
    </StVertiginosaVideo>
  )
}

export default VertiginosaVideo