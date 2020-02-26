import styled from 'styled-components'

const StWPColumns = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)` || 'auto'};
  align-items: center;
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
  &.noncollapsable{
    @media(max-width: 800px){
      grid-template-columns: ${props => `repeat(${props.cols}, 1fr)` || 'auto'};
    }
  }
`

export { StWPColumns };