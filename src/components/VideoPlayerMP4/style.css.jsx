import styled from 'styled-components'
import theme from '@/styles/theme'

const StVideo = styled.div`
  position: relative;
  /* padding-top: ${props => props.format && props.format === 'vertical' ? '177.77%' : '56.25%' }; */
  background: ${theme.darkcolor};
  cursor: pointer;

  /* .react-player,
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  } */
  video{
    cursor: pointer;
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



const Info = styled.div`
  transition: opacity 0.4s ease-out;
  opacity: ${props => props.hovered && !props.overlayed ? '1' : '0'};
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  padding: 2rem;
  pointer-events: none;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(black, transparent);
    z-index: -1;
  }
  h3{
    text-align: left;
    font-family: 'Acta Headline';
    font-style: italic;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
  p{
    padding: 0 0 0 0.2rem;
    line-height: 1.1;
    font-size: 1rem;
    font-family: 'Acta Sans', sans-serif;
    pointer-events: none;
  }
`

const Overlay = styled.div`
  transition: opacity 0.4s ease-out;
  opacity: ${props => props.overlayed ? '1' : '0'};
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  padding: 3rem 3rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(transparent, black, transparent);
    z-index: -1;
  }
  h3{
    text-align: left;
    font-family: 'Acta Headline';
    font-style: italic;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }
  p{
    padding: 0 0 0 0.2rem;
    line-height: 1.1;
    font-size: 1rem;
    font-family: 'Acta Sans', sans-serif;
    pointer-events: none;
  }
  .cols{
    display: grid;
    grid-template-columns: 80px auto;
    grid-gap: 1rem;
    align-items: center;
    pointer-events: none;
    /* justify-content: flex-end; */
  }
  .col-icon{
    font-size: 40px;
    width: 80px;
    height: 70px;
    border: 2px solid white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    svg{
      pointer-events: none;
    }
  }
`

const VideojsWrapper = styled.div`

`

export { StVideo, Overlay, Info, VideojsWrapper }