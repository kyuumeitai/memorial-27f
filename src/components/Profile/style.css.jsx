import styled from 'styled-components'
import theme from '@/styles/theme'

const StProfile = styled.div`
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
  h3{
    margin: ${theme.headerHeight} 0;
  }
`

export { StProfile }