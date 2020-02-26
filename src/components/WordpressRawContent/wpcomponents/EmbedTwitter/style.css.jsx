import styled from 'styled-components'
import theme from '@/styles/theme'

const StEmbedTwitter = styled.div`
  max-width: ${theme.normalWidth};
  margin: ${theme.verticalSpacing} auto;
  .embedwrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { StEmbedTwitter }