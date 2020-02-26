import styled from 'styled-components'
import theme from '@/styles/theme'
import { Link } from 'gatsby'

const Article = styled.article`
  padding: ${theme.verticalSpacing} ${theme.spacing} 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: -${theme.verticalSpacing};
`

const Credits = styled.div`
  padding: 0.8rem 0 0.8rem 0.2rem;
  text-align: right;
  .author{
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    strong{
      font-weight: bold;
    }
  }
`

const Title = styled.div`
  max-width: ${theme.normalWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  color: ${theme.color};
  h2{
    line-height: 1;
    @media(max-width: 800px){
      font-size: 3.5rem;
    }
    &.large-word{
      @media(max-width: 800px){
        font-size: 2.8rem;
      }
    }
  }

`

const StLink = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 3;
  display: block;
  &:active,
  &:hover,
  &:visited{
    color: transparent;
  }
`

const ButtonWrap = styled.div`
	margin-block-start: 1rem;
	margin-block-end: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Button = styled.span`
  background-color: ${theme.background};
  color: ${theme.color};
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: 'Acta Sans', sans-serif;
  font-weight: bold;
  width: auto;
  vertical-align: center;
  line-height: 1;
  svg{
    margin-left: 8px;
    font-size: 1.2rem;
  }
`

export { Article, Title, StLink, Credits, ButtonWrap, Button }