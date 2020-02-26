import React, {useState, useEffect} from 'react'
import throttle from 'lodash/throttle'
import VertiginosaVideo from './VertiginosaVideo'
import {
  StVertiginosaHero,
  Bg,
  Sticky,
  ContainerSticky,
  IconScroll,
  IconScrollWrap,
} from './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VertiginosaOverlay from '@/images/logo-vertiginosa-overlay.svg'

const video = {
  video_mp4_url: 'https://rudo.video/redirector/1080/c56b1b1403350259de46127837ee9325.mp4',
  video_format: 'horizontal',
}

const VertiginosaHero = () => {
  const [opacityval, setOpacityval] = useState(0)

  const watchScrolling = () => {
    const { clientHeight, scrollTop } = document.documentElement

    const maxHeight = clientHeight * 3;
    const winScroll = document.body.scrollTop || scrollTop
    const winHeight = maxHeight - clientHeight
    const scrolled = `${((winScroll / winHeight) * 1).toFixed(2)}`

    if (winHeight > 0 && scrolled <= 1) {
      return setOpacityval(scrolled)
    } else {
      return setOpacityval(1)
    }
  }

  useEffect(
    () => {
      const watchThrottled = throttle(watchScrolling, 200)
      window.addEventListener('scroll', watchThrottled)
      return () => {
        window.removeEventListener('scroll', watchThrottled)
      }
    }, [opacityval]
  )

  const styles = {
    progress: {
      opacity: opacityval
    }
  }

  console.log('opacityval', opacityval)

  return (
    <StVertiginosaHero>
      <ContainerSticky>
        <Sticky>
          <Bg>
            <img style={ styles.progress } className="overlay" src={VertiginosaOverlay} alt="Una década vertiginosa" />
          </Bg>
          <VertiginosaVideo video={video} />
          <IconScrollWrap>
            <IconScroll>
              <span>scroll</span>
              <FontAwesomeIcon className="icon" icon={['fas', 'chevron-down']} />
            </IconScroll>
          </IconScrollWrap>
        </Sticky>
      </ContainerSticky>
    </StVertiginosaHero>
  )
}

export default VertiginosaHero