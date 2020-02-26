import styled from 'styled-components'

const StVertiginosaVideo = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  /* @media(max-width: 800px){
    height: 100vh;
    width: 100vh;

  } */
`

const StVertiginosaZoomer = styled.div`
  @media(max-width: 800px){
    width: calc(100vw * 3.2);
    margin-left: -110vw;
  }
`

export { StVertiginosaVideo, StVertiginosaZoomer }