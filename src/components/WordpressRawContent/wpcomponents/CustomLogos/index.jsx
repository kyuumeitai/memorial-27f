import React from 'react'
import { LaboratorioDeContenidosDeMarcaWhite, CultoWhite, PaulaWhite, QuepasaWhite} from '@labcon/copesa-logos'

const CustomLogos = ({logo}) => {
  switch(logo) {
    case 'LaboratorioDeContenidosDeMarcaWhite' :
      return <LaboratorioDeContenidosDeMarcaWhite />
    case 'CultoWhite' :
      return <CultoWhite />
    case 'PaulaWhite':
      return <PaulaWhite />
    case 'QuepasaWhite':
      return <QuepasaWhite />
    default:
      return null
  }
}

export default CustomLogos
