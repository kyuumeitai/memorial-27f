import styled, {keyframes} from 'styled-components'
import theme from '@/styles/theme'
import { math } from 'polished'

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

`

const ContainerSticky = styled.div`
  height: ${props => math(`${props.phraseLength + 1} * 100vh`) || '100vh'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translate3d(0, 0, 0);
  align-items: flex-start;
  /* background-color: black; */

`

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  padding-top: ${theme.headerHeight};
`

const ContainerPhotos = styled.div`
  z-index: 2;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* background-color: black; */
  @media(max-width: 800px){
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`

const ContainerTitle = styled.div`
  background: ${theme.darkcolor};
  z-index: 1;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding-top: ${theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  line-height: 1;
  .ContainerTitle{
    max-width: ${theme.normalWidth};
  }
`

const ContainerPhrases = styled.div`
  position: relative;
  z-index: 3;
`

const ContainerPhrase = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${theme.spacing};
  padding-right: ${theme.spacing};
  &:first-of-type{
    padding-top: ${theme.headerHeight};
  }
  @media(max-width: 800px){
    padding-left: 0;
    padding-right: 0;
  }
  h1,
  h2,
  h3{
    text-align: center;
    line-height: 1.05;
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    font-family: 'Acta Headline';
    font-style: italic;
    @media(max-width: 800px){
      font-size: 3rem;
      max-width: 90%;
      padding: 0;
    }
    @media(max-width: 321px){
      font-size: 2.6rem;
      max-width: 90%;
      padding: 0;
    }
  }
`

const Title = styled.div`
  opacity: ${props => props.showTitle ? '1' : '0'};
  transition: opacity 1s ease-out;
  padding: 0 1rem;
  color: ${theme.background};
  h2{
    font-size: ${props => props.home ? '7rem' : '4.2rem'};
    @media(max-width: 800px){
      font-size: ${props => props.home ? '5rem' : '3.2rem'};
    }
  }
`

const Credits = styled.div`
  padding: 0.8rem 0 0.8rem 0.2rem;
  text-align: right;
  .author{
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    strong{
      font-weight: bold;
    }
  }
`

const IconScroll = styled.div`
  position: sticky;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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


export { Container, ContainerSticky, ContainerPhotos, ContainerTitle, ContainerPhrases, ContainerPhrase, Sticky, Title, Credits, IconScroll}