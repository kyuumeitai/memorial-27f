import styled from 'styled-components'

const StIntro = styled.section`
  min-height: 100vh;
  padding: 1rem;
  margin: 25% 25% 0 0;
  @media(max-width: 900px){
    margin: 10% 10% 0 0;
  }
  p{
    font-size: 3rem;
    text-rendering: optimizeLegibility;
    line-height: 1.25;
    max-width: calc(100% - 30px);
    margin-bottom: 4rem;
    @media(max-width: 800px){
      font-size: 1.5rem;
    }
    &:first-of-type{
      &:first-line{
        text-transform: uppercase;
        letter-spacing: 6px;
      }
    }
  }
`

export {StIntro}