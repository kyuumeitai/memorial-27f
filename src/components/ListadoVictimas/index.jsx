import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import {StListado, StLink} from './style.css'

const dasherize = str => {
  const map = {
    '-': ' ',
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  }

  let strlow = str.trim().toLowerCase()

  for (let pattern in map) {
    strlow = strlow.replace(new RegExp(map[pattern], 'g'), pattern)
  }
  return strlow
}

const LinkVictima = ({nombres, apellidos}) => {
  return (
    <StLink to={`/${dasherize(nombres)}-${dasherize(apellidos)}/`}>{nombres} {apellidos}</StLink>
  )
}

const Listado = () => {
  const sheetquery = useStaticQuery(
    graphql`
      query  {
        allGoogleSheetTestimoniosRow  {
          nodes {
            apellidos
            nombres
          }
        }
      }
    `
  )

  const victimas = get(sheetquery, 'allGoogleSheetTestimoniosRow.nodes')

  if (!victimas) {
    return null
  }

  return (
    <StListado>
      <h2>Listado Completo</h2>
      {
        victimas.map((victima, index) => (
          <LinkVictima key={index} nombres={victima.nombres} apellidos={victima.apellidos} />
        ))
      }

    </StListado>
  )
}



export default Listado
