import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StWPBlockQuote = styled.div`
  max-width: ${theme.normalWidth};
  font-weight: 600;
  background-color: ${theme.color};
  color: ${theme.background};
  padding: ${theme.spacing};
  margin-block-start: ${theme.verticalSpacing};
  margin-block-end: ${theme.verticalSpacing};
  margin-left: auto;
  margin-right: auto;
  .corecolumns &{
    @media(max-width: 800px){
      margin-block-start: ${theme.spacing};
      margin-block-end: ${theme.spacing};
    }
  }
  blockquote{
    padding: 0;
    margin: 0;
  }

  @media (max-width: 800px) {
    max-width: 90%;
  }

  cite {
    font-size: ${math(`${theme.fontTitleSize} / 4`)};
    font-family: ${theme.fontTitle};
    font-weight: bold;
    text-align: right;
    display: block;
  }
  p {
    text-align: center;
    font-family: ${theme.fontTitle};
    font-size: ${math(`${theme.fontTitleSize} / 2`)};
    font-weight: bold;
    position: relative;
    margin: ${theme.spacing} 0;
    strong {
      font-size: ${math(`${theme.fontTitleSize} / 1.8`)};
      color: white;
    }
  }
`

export { StWPBlockQuote }