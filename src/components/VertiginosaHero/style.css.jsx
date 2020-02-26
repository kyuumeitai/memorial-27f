import styled, {keyframes} from 'styled-components'
import theme from '@/styles/theme'

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
`;

const StVertiginosaHero = styled.div`
  background-color: black;
  height: 400vh;
  position: relative;
  z-index: 0;
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
  }
  .gatsby-image-wrapper{
    height: 100vh;
  }
`

const ContainerSticky = styled.div`
  height: 400vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translate3d(0, 0, 0);
  align-items: flex-start;
`

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`

const IconScrollWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: linear-gradient(transparent, black);
`

const IconScroll = styled.div`
  position: sticky;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9;
  color: white;
  padding: 0.75rem 1rem;

  span{
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: 'Acta Sans', sans-serif;
    letter-spacing: 2px;
  }
  svg{
    animation: ${KeyframeArrow} 1.5s ease-in-out 0s infinite;
    font-size: 1.2rem;
    line-height: 1;
  }
`
export { StVertiginosaHero, Bg, ContainerSticky, Sticky, IconScroll, IconScrollWrap }