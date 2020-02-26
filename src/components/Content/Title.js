import React from 'react'
import {StTitle} from './style.css'
import Fade from 'react-reveal/Fade'

const Title = ({ title, titulo, subtitulo }) => {

return (
  <Fade>
    <StTitle>
      {titulo && subtitulo
        ?
          <>{titulo} <small>{subtitulo}</small></>
        :
          <>{title}</>
      }
    </StTitle>
  </Fade>
  )
}

export default Title