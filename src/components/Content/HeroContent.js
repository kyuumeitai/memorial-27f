import React from 'react'
import { HeroContainer, StyledImage } from './style.css'
import VideoPlayer from '../VideoPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HeroContent extends React.Component {
  constructor(props) {
    super(props)
    this.clickScroll = this.clickScroll.bind(this)
  }
  clickScroll() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
  render() {
    const { image, video, video_iframe, children, nomore } = this.props
    return (
      <HeroContainer>
        <div className="overlay">
          {children}
          {!nomore &&
            <div className="more" onClick={this.clickScroll}>
              Ver más
              <FontAwesomeIcon className="icon" icon={['fas', 'chevron-down']} />
            </div>
          }
        </div>
        <div className="wrap">
          {video_iframe &&
            <VideoPlayer iframe={video_iframe} />
          }
          {!video_iframe && video &&
            <VideoPlayer url={video} />
          }
          {!video && image && image.localFile &&

            <StyledImage fluid={image.localFile.childImageSharp.fluid} />
          }
        </div>
      </HeroContainer>
    )
  }
}

export default HeroContent