import React, { useState, useEffect, useContext} from 'react'
import throttle from 'lodash/throttle'
import ScrollContext from '@/context/ScrollContext'
import ThemeContext from '@/context/ThemeContext'
import { StProgressBar, StProgressBarWrap } from './style.css'

const ProgressBar = ({color, height, adjustment = 0}) => {
  const [width, setWidth] = useState(0)

  const scrollcontext = useContext(ScrollContext)
  const themecontext = useContext(ThemeContext)

  const percentageWatcher = (percentage) => {
    // Es feo pero es más performante
    // https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than
    if (percentage < 16) {
      themecontext.setPhase('phase1')
    } else
    if (percentage < 32) {
      themecontext.setPhase('phase2')
    } else
    if (percentage < 48) {
      themecontext.setPhase('phase3')
    } else
    if (percentage < 64) {
      themecontext.setPhase('phase4')
    } else
    if (percentage < 80) {
      themecontext.setPhase('phase5')
    } else
    if (percentage < 100) {
      themecontext.setPhase('phase6')
    }
  }

  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement
    const winScroll = document.body.scrollTop || scrollTop
    const winHeight = scrollHeight - clientHeight
    const scrolled = (winScroll / (winHeight - adjustment )) * 100
    if(winHeight > 0) {
      scrollcontext.setPercentage(scrolled)
      percentageWatcher(scrolled)
      return setWidth(`${scrolled}%`)
    } else {
      scrollcontext.setPercentage(0)
      return setWidth(0)
    }
  }

  useEffect(
    () => {
      const watchThrottled = throttle(watchScrolling, 200)
      window.addEventListener('scroll', watchThrottled)
      return() => {
        window.removeEventListener('scroll', watchThrottled)
      }
    },
    [color, height, adjustment]
  )

  const styles = {
    progress: {
      width: width
    }
  }

  return (
    <StProgressBarWrap>
      <StProgressBar style={styles.progress} height={height} color={color} />
    </StProgressBarWrap>
  )
}

export default ProgressBar