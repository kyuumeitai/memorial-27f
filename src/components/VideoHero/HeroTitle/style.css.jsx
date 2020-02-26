import styled from 'styled-components'
import theme from '@/styles/theme'
import {transparentize} from 'polished'

const Wrap = styled.span`
  background-color: ${props => props.bg ? theme.clearcolor : transparentize(0.8, `${theme.clearcolor}`)};
  transition: all 1.2s ease;
  display: inline;
  padding: 0.1rem 1rem;
  white-space: normal;
  box-decoration-break: clone;
  @media(max-width: 800px){
    padding: 0.1rem 0;
  }
`

export { Wrap }