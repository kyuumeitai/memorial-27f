import styled from 'styled-components'
import theme from '@/styles/theme'
// import bgpaper from '@/images/papel.png'

const StHeroMemorial = styled.div`
  padding-top: ${theme.headerHeight};
  min-height: 80vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background-color: black;
  .title{
    display: block;
    max-width: ${theme.normalWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
  @media(max-width: 800px){
    min-height: 60vh;
  }
`

const Content = styled.div`
  min-height: 80vh;
  padding: 3rem 0;
  z-index: 0;
  @media(max-width: 800px){
    min-height: 70vh;
  }
  img{
    max-height: 80vh;
  }
`

const Text = styled.div`
  max-width: ${theme.normalWidth};
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  p{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  a{
    text-decoration: underline;
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: black;
  .gatsby-image-wrapper{
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media(max-width: 800px){
      top: 15vh;
    }
    img{
      object-position: center center;
      object-fit: contain !important;
    }
  }
`

export { StHeroMemorial, Content, Text, Bg}