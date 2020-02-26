import React, {useState} from 'react'
import { Waypoint } from 'react-waypoint'
import SplitText from 'react-pose-text'
import { Wrap } from './style.css'

const HeroTitle = ({frase, delayed, home}) => {

  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = (visibleval) => {
    if(delayed) {
      return setTimeout(() => {
        setIsVisible(visibleval)
      }, 500)
    }
    return setIsVisible(visibleval)
  }

  const charPoses = {
    exit: { opacity: 0, y: 4 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 40
    }
  }

  return (
    <Waypoint onEnter={() => handleVisibility(true)}>
      <h2>
        <Wrap bg={isVisible} home={home}>
          <SplitText initialPose="exit" pose={isVisible ? 'enter' : 'exit'} charPoses={charPoses}>
            {frase}
          </SplitText>
        </Wrap>
      </h2>
    </Waypoint>
  )
}

export default HeroTitle