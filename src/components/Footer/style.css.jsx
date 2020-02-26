import styled from 'styled-components'
import theme from '../../styles/theme'

const Container = styled.header`

`;

const StLogo = styled.h1`
  font-family: ${theme.fontbody};
  font-size: 10px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  svg, img{
    min-width: 150px;
    max-width: 100%;
    max-height: 40px;
  }
`

const StFooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 20px 0;
  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }
`

export { Container, StLogo, StFooterContent }