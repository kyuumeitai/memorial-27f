import React from 'react'
import Lottie from 'react-lottie'
import get from 'lodash/get'
import { LottieWrapper } from './style.css'

const jsons = require.context('@/jsons/', false, /\.json$/)

const ACFLottie = ({ block }) => {
  const lottiefilename = get(block, 'attrs.data.lottie_json')

  if (!lottiefilename) {
    return null
  }

  try {
    const jsonfile = jsons(`./${lottiefilename}`)
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
      <LottieWrapper>
        <Lottie
          options={lottieOptions}
        />
      </LottieWrapper>
    )
  } catch (err){
    console.log('Lottie Err:', err)
  }
  return null
}

export default ACFLottie