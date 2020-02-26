import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { StVideo, Overlay, Info, VideojsWrapper} from './style.css'
import videojs from 'video.js'
import 'video.js/dist/video-js.css';

const generateKey = () => {
  return Math.random().toString(36).substring(7);
}

const VideoPlayerInner = ({ videourl, format, onErrorCallback, autoplay, controls, muted, loop, poster }) => {

  const [player, setPlayer] = useState(null)
  const videoNode = useRef(null)

  const trackEvent = (type) => {
    switch (type) {
      case 'play':
        trackCustomEvent({
          category: 'video',
          action: 'play',
          label: videourl,
        })
      case 'ended':
        trackCustomEvent({
          category: 'video',
          action: 'ended',
          label: videourl,
        })
      case 'pause':
        trackCustomEvent({
          category: 'video',
          action: 'pause',
          label: videourl,
        })
      default:
        return null
    }
  }

  const options = {
    autoplay: autoplay ? autoplay : false,
    controls: controls ? controls : true,
    muted: muted ? muted : false,
    preload: 'auto',
    responsive: true,
    loop: loop ? loop : true,
    // fluid: true,
    aspectRatio: format === 'vertical' ? '1:1' : '16:9',
    poster: poster ? poster : '',
    sources: [{
      src: videourl,
      type: 'video/mp4'
    }]
  }

  const onPlay = () => {
    trackEvent('play')
  }

  const onPause = () => {
    trackEvent('pause')
  }

  const onEnded = () => {
    trackEvent('ended')
  }

  const onError = (e) => {
    console.log('error: ', e)
    onErrorCallback()
  }

  useEffect(() => {
    const vjsPlayer = videojs(videoNode.current, options)
    setPlayer(vjsPlayer)
    // if(poster) {
    //   vjsPlayer
    // }
    return () => {
      if(player) {
        player.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if(player){
      player.on('play', onPlay)
      player.on('pause', onPause)
      player.on('ended', onEnded)
      player.on('error', onError)
    }
  }, [player])

  return (
    <VideojsWrapper>
      <div data-vjs-player>
        <video ref={videoNode} className="video-js vjs-big-play-centered" autoPlay={autoplay} loop={loop} playsinline></video>
      </div>
    </VideojsWrapper>
  )
}

const VideoPlayer = ({ videourl, format, autoplay=false, controls=true, muted=false, loop=true, poster}) => {
  const [key, setKey] = useState(generateKey)
  const onErrorCallback = () => {
    setKey(generateKey)
  }
  return (
    <VideoPlayerInner key={key} videourl={videourl} format={format} onErrorCallback={onErrorCallback} autoplay={autoplay} controls={controls} muted={muted} loop={loop} poster={poster} />
  )
}

export default VideoPlayer