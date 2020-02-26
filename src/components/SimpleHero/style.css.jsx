import styled from 'styled-components'
import theme from '@/styles/theme'

const StSimpleHero = styled.div`
  background-color: black;
  padding-top: ${theme.headerHeight};
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`

const Col = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  &:first-of-type{
    justify-content: flex-start;
  }
  &:last-of-type{
    justify-content: flex-end;
    @media(max-width: 800px){
      display: none;
    }
  }
`

const Sponsored = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    height: 40px;
  }
  span{
    padding-right: 0.5rem;
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
  }
`

const Medium = styled.div`
  @media(max-width: 800px){
    display: none;
  }
`

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  @media(max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
  }
  svg{
    max-width: 100%;
    max-height: 30px;
    min-width: 120px;
  }
  &::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 20%;
    background: linear-gradient(black, transparent);
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  z-index: 0;
  >div{
    max-width: ${theme.normalWidth};
    text-align: center;
    h1{
      color: white;
      line-height: 0.8;
      @media(max-width: 800px){
        font-size: 3rem;
      }
    }
    p{
      color: white;
    }

  }
  &:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background: linear-gradient(transparent, black);
    z-index: -1;
    @media(max-width: 800px){
      height: 80%;
    }
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  .gatsby-image-wrapper{
    height: 100vh;
  }
`
export { StSimpleHero, Header, Col, Content, Bg, Sponsored, Medium }