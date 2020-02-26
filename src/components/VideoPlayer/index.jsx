import React, { useState } from 'react'
import { StVideo } from './style.css'
import ReactPlayer from 'react-player'
import { Waypoint } from 'react-waypoint'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldPlay: false,
    }
  }

  updateShouldPlay = (update) => {
    this.setState({
      shouldPlay: update
    })
  }

  handleEnterViewport = () => {
    this.updateShouldPlay(true)
  }

  handleExitViewport = () => {
    this.updateShouldPlay(false)
  }

  render() {
    const {iframe, url, controls = true, width = '100%', height = '100%', noProportions = false, loop = true, autoPlay=false, muted = true, playfunc = false, playing = false, playsinline=true, onEnded, onPause} = this.props

    if(iframe) {
      return (
        <StVideo className={noProportions ? 'noProportions' : ''}>
          <iframe className="vrudo" src={iframe} width="100%" height="100%" allowscriptaccess="always" allowFullScreen webkitallowfullscreen="true" frameBorder="0" scrolling="no" allow="autoplay; fullscreen" ></iframe>
        </StVideo>
      )
    } else {
      return (
        <Waypoint onEnter={this.handleEnterViewport} onLeave={this.handleExitViewport} >
          <StVideo className={noProportions ? 'noProportions' : ''}>
            <ReactPlayer className="react-player"
              url={url} autoPlay={autoPlay} playing={playfunc ? playing : this.state.shouldPlay} loop={loop} controls={controls} width={width} height={height} playsinline={playsinline} muted={true} onEnded={onEnded} onPause={onPause} />
          </StVideo>
        </Waypoint>
      )
    }
  }
}

export default VideoPlayer