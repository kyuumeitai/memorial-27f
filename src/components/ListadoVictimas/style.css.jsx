import styled from 'styled-components'
import theme from '@/styles/theme'
import {Link} from 'gatsby'

const StListado = styled.div`
  display: block;
  margin-top: ${theme.headerHeight};
  max-width: ${theme.normalWidth};
  padding: ${theme.verticalSpacing} 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h2{
    margin: ${theme.headerHeight} 0;
  }
`

const StLink = styled(Link)`
  display: block;
  padding: 0.3rem;
  transition: all .3s ease;
  &:hover{
    background-color: ${theme.color};
    color: ${theme.background};
  }
`

export {StListado, StLink}