
import React, { useState } from "react"
import Title from "./Title"
import { Link } from 'gatsby'
import Image from '../Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VideoPlayer from '../VideoPlayer'
import Share from '../Sharer'
import get from 'lodash/get'

import { StBlock } from "./style.css"

const Block = ({ to, videosrc, imgurl, bajada, imgopacity, ...rest }) => {
  const [shouldPlay, updateShouldPlay] = useState(false)
  const [shouldShowVideo, updateShouldShowVideo] = useState(false)
  const [shouldOverlay, updateShouldOverlay] = useState(false)
  const [shouldMute, updateShouldMute] = useState(false)
  const [shouldLoop, updateShouldLoop] = useState(false)

  const formatvideorudourl = get(rest, 'acf.video')
  const iframevideo = get(rest, 'acf.video_iframe')

  const handleVideoClick = () => {
    updateShouldShowVideo(true)
    updateShouldPlay(true)
  }

  const handleVideoEnd = () => {
    updateShouldOverlay(true)
    updateShouldMute(true)
    updateShouldLoop(true)
  }

  const handleOverlayClose = () => {
    updateShouldShowVideo(false)
    updateShouldOverlay(false)
  }

  const handleVideoPause = () => {
    updateShouldOverlay(true)
    updateShouldShowVideo(true)
    updateShouldPlay(false)
  }

  const LinkClick = ({ children }) => {
    return (
      <Link className="blockLinkClick" to={`/${to}/`}>
        {children}
      </Link>
    )
  }

  return (
    <StBlock>

      <div className="blockSticky">
        <div className="blockWrap">
          <div className="blockText" onClick={handleVideoClick}>
            <div className="blockTextTop">
              <Link className="blockLinkClick" to={`/${to}/`}>
                <Title {...rest} />
              </Link>
            </div>
            <div className="blockTextBottom">
              <div className="excerpt" dangerouslySetInnerHTML={{ __html: bajada }} />
              <div className="share-wrap">
                <Share
                  socialConfig={{
                    twitterHandle: 'latercera',
                    config: {
                      url: `https://interactivo.latercera.com/memorial-27f/${to}/`,
                      title: `${rest.title} - Interactivos La Tercera - Presentado por Nike`,
                    }
                  }}
                />
              </div>
              <Link className="blockLinkClick" to={`/${to}/`}>
                <span className="button-more">
                  <FontAwesomeIcon className="icon" icon={['far', 'eye']} />
                  Ver Artículo
                  </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </StBlock>
  )

}
export default Block