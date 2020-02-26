import styled from 'styled-components'
import theme from '@/styles/theme'

const StSismografo = styled.div`
  padding: 8rem 0;
  @media(max-width: 800px){
    padding: 4rem;
  }
  h2{
    text-align: center;
  }
`
const SisWrap = styled.div`
  img{
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    image-rendering: pixelated;
    filter: grayscale(100%);
  }
  span{
    display: block;
    padding: 0.5rem 1rem;
    font-family: 'Acta Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
  }
`
export { StSismografo, SisWrap }