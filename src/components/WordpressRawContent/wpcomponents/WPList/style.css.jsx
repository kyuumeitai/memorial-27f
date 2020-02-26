import styled from 'styled-components'
import theme from '@/styles/theme'

const StWPList = styled.div`
  max-width: ${theme.normalWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.spacing};
  padding-right: ${theme.spacing};
  ul {
    list-style: circle inside;
	}
`

export { StWPList }