import React from 'react'
import { StSismografo, SisWrap } from './style.css'
import sismografo from '@/images/sismografoc.png'

const Sismografo = () => {
  return (
    <StSismografo>
      <h2>Registro del sismógrafo en la madrugada del 27F</h2>
      <SisWrap>
        <a href="https://minio.lab.ltnext.com/strapi/sismografo.png" target="_blank">
          <img src={sismografo} />
          <span>ver imagen completa</span>
        </a>
      </SisWrap>
    </StSismografo>
  )
}

export default Sismografo
