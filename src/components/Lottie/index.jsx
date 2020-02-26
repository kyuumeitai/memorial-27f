import React from 'react'
import Lottie from 'react-lottie'
import { StLottie } from './style.css'

const jsons = require.context('@/jsons/', false, /\.json$/)

const LottieObj = ({filename}) => {
  const jsonfile = jsons(`./${filename}`)
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonfile,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <StLottie>
      <Lottie
        options={lottieOptions}
      />
    </StLottie>
  )
}

export default LottieObj
