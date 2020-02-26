import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StWPPullQuote = styled.div`
  max-width: ${theme.normalWidth};
  font-weight: 600;
  font-family: ${theme.fontTitle};
  /* background-color: ${theme.color};
  color: ${theme.background}; */
  border-top: 1px solid ${theme.color};
  border-bottom: 1px solid ${theme.color};
  padding: ${theme.spacing};
  margin-block-start: ${theme.verticalSpacing};
  margin-block-end: ${theme.verticalSpacing};
  margin-left: auto;
  margin-right: auto;
  blockquote{
    padding: 0;
    margin: 0;
  }

  @media (max-width: 800px) {
    margin-block-start: 6rem;
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
    font-weight: bold;
    font-size: ${math(`${theme.fontTitleSize} / 2`)};
    position: relative;
    margin: ${theme.spacing} 0;
    strong {
      font-size: ${math(`${theme.fontTitleSize} / 1.8`)};
    }
  }
`

export { StWPPullQuote }