import styled from 'styled-components'

const Photo = styled.figure`
  .gatsby-image-wrapper{
    min-height: 34vh;
    opacity: ${props => props.hiddenPhoto ? '0' : '1'};
    transition: opacity 0.5s ease-out ${props => props.photoid ? props.photoid * 60 : 100}ms;
    @media(max-width: 800px){
      min-height: 20vh;
    }
  }
  img, svg{
    width: 100%;
    height: 100%;
    min-height: 34vh;
    image-rendering: pixelated;
    @media(max-width: 800px){
      min-height: 20vh;
    }
  }
`

export { Photo }