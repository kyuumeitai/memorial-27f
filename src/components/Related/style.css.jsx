import styled from 'styled-components'
import theme from '@/styles/theme'

const StRelated = styled.section`
  margin: 0 -1rem -1rem;
`
const Header = styled.header`
  padding: ${theme.spacing} 0 0;
  h2{
    text-align: left;
    font-size: 2rem;
  }
`

const Content = styled.div`

`

export {StRelated, Header, Content}