import styled from 'styled-components'
import theme from '../../styles/theme'

const StVideo = styled.div`
  position: relative;
  padding-top: 56.25%;
  .react-player,
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &.noProportions{
    padding: 0;
    position: static;
    height: calc(100vh - ${theme.headerHeight} - 4rem); //100vh - pestañas - botón leer artículo
    .react-player{
      position: static;
    }
  }
`

export { StVideo }