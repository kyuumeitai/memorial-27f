import styled, {keyframes} from 'styled-components'

const tiritonsismico1 = keyframes`
  0% {
    left:0;
  }
  20% {
    left:-0.4%;
  }
  50% {
    left:0.8%;
  }
  70% {
    left:-0.4%;
  }
  100% {
    left:1%;
  }
`

const tiritonsismico2 = keyframes`
  0% {
    left:0;
  }
  20% {
    left:-0.6%;
  }
  50% {
    left:1%;
  }
  70% {
    left:-0.6%;
  }
  100% {
    left:1.2%;
  }
`

const tiritonsismico3 = keyframes`
  0% {
    left:0;
  }
  20% {
    left:-0.8%;
  }
  50% {
    left:1.2%;
  }
  70% {
    left:-0.8%;
  }
  100% {
    left:1.4%;
  }
`

const StLayout = styled.div`

`

const MainWrap = styled.div`
  transition: all .3s ease-in-out;
  position: relative;
  &.earthquake{
    .phase1 &,
    .phase2 &{
      animation: ${tiritonsismico1} 1s infinite alternate;
      @media(max-width: 800px) {
        animation: ${tiritonsismico2} 1s infinite alternate;
      }
    }
    .phase3 &,
    .phase4 &{
      animation: ${tiritonsismico2} 1s infinite alternate;
      @media(max-width: 800px) {
        animation: ${tiritonsismico3} 1s infinite alternate;
      }
    }
    .phase5 &,
    .phase6 &{
      animation: ${tiritonsismico2} 0.6s infinite alternate;
      @media(max-width: 800px) {
        animation: ${tiritonsismico3} 0.6s infinite alternate;
      }
    }
  }
`

export { StLayout, MainWrap }