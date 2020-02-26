import styled, { keyframes } from 'styled-components'
import { Link }  from 'gatsby'
import theme from '../../../styles/theme'

const KeyframeSlideIn = keyframes`
  0% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
`

const KeyframeAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const KeyframeShrink = keyframes`
  0% {
    width: 95%;
  }
  100% {
    width: 90%;
  }
`

const StMobileNav = styled.nav`
  position: fixed;
  top: ${theme.headerHeight};
  left: 0;
  right: 0;
  height: ${props => props.opened ? `calc(100vh - ${theme.headerHeight})` : '0'};
  overflow: hidden;
  overflow-y: auto;
  z-index: 4;
  transition: height 0.3s ease;
  background-color: ${theme.color};
`;

const StLink = styled(Link)`
  display: block;
  font-family: 'Acta Sans', sans-serif;
  font-weight: normal;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.background};
  padding: 1.3rem 1.5rem;
  animation: ${KeyframeAppear} 1s forwards;
  animation-delay: ${props => props.delay || '0'};
  opacity: 0;
  span{
    display: block;
    animation: ${KeyframeSlideIn} 0.5s forwards;
    animation-delay: ${props => props.delay || '0'};
  }
`

const StLine = styled.span`
  display: block;
  width: 90%;
  height: 1px;
  background-color: ${theme.background};
  margin: 0 auto;
  animation: ${KeyframeShrink} 0.5s forwards;
  animation-delay: ${props => props.delay || 0};
`

export { StMobileNav, StLink, StLine};
