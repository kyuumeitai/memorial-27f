import styled from 'styled-components'
import theme from '../../styles/theme'

const StNonProcessedImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${theme.maxWidth};
  display: flex;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
  }
`

export { StNonProcessedImage }
