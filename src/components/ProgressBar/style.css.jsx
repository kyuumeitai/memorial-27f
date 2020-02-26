import styled from 'styled-components'

const StProgressBarWrap = styled.div`
  margin-top: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`

const StProgressBar = styled.div`
  background-color: ${props => props.color || '#91252f'};
  height: ${props => props.height || 5}px;
  transition: all .2s ease-out;
`

export {StProgressBar, StProgressBarWrap}