import styled from 'styled-components'
import theme from '@/styles/theme'
import { Link } from 'gatsby'
import { getContrast, getLuminance } from 'polished'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
`
const getFontColor = (bgcolor) => {
  return getLuminance(`${bgcolor}`) > 0.5 ? theme.darkcolor : theme.clearcolor;
}

const StyledImg = styled.div`
  margin-bottom: ${theme.verticalSpacing};
  max-width: ${theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  .gatsby-image-wrapper{
    min-height: 80vh;
  }
`

const StyledPost = styled.section`
  text-decoration: none;
  background-color: ${props => props.bgColor || theme.background};
  color: ${ props => props.bgColor ? getContrast(`${props.bgColor}`, `${theme.color}`) <= 8 ? getFontColor(props.bgColor) : theme.color : theme.color };
  display: block;
  padding: ${theme.verticalSpacing} 0;
  .backbutton{
		transition: all 300ms ease-out;
		text-decoration: none;
		font-size: 1.2rem;
		width: auto;
		display: block;
		max-width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.clearcolor};
		background-color: ${theme.complementary};
		margin-left: auto;
		margin-right: auto;
		padding: 1rem 2.4rem;
		border-radius: 50px;
		margin-block-start: 1rem;
		margin-block-end: 3rem;
  }
  .linkClick {
    padding-top: 1px;
    padding-bottom: 1px;
    display: block;
  }
  .defaultHeader{
    max-width: ${theme.normalWidth};
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
    text-align: center;
    margin-top: ${theme.headerHeight};
    h1{
      line-height: 1;
    }
    .excerpt{
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      p{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
      }
      /* font-style: italic; */
      padding: ${theme.spacing} 0;
    }
    .author{
      font-family: 'Acta Sans', sans-serif;
      padding: ${theme.spacing} 0;
      text-transform: uppercase;
    }
  }
  strong{
    font-weight: bold;
    color: ${theme.complementary};
  }
  p a{
    color: ${theme.complementary};
  }
`

export { StyledLink, StyledPost, StyledImg }