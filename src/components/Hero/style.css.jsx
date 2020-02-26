import styled, { keyframes } from 'styled-components'
import theme from '../../styles/theme'

const KeyframeArrow = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const Container = styled.section`
  position: relative;
  min-height: ${props => props.minheight || '80vh'};
  overflow: hidden;
  .vector-landscape{
    display: block;
    @media(max-width: 800px){
      display: none;
    }
  }
  .vector-portrait{
    display: none;
    @media(max-width: 800px){
      display: block;
    }
  }
`

const Content = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 2;
  .wrap{
    /* width: 100%; */
    .logo{
      svg{
        fill: ${theme.color};
        min-width: 30vw;
        min-height: 30vh;
      }
    }
  }
  .view-more{
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
    padding: 2rem;
    font-family: 'Acta Sans';
    font-size: 1rem;
    background-color: transparent;
    border: 0;

    .icon{
      display: block;
      margin: 12px auto 0;
      animation: ${KeyframeArrow} 1.5s ease-in-out 0s infinite;
    }
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    background: linear-gradient(transparent, ${theme.background});
  } */
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
`

export { Container, Content, Bg }