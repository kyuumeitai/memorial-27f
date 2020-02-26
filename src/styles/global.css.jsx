import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import theme from './theme'
import { math } from 'polished'

import {
  ActaAgate,
  ActaAgate2,
  ActaAgateB,
  ActaAgateB2,
  ActaDisplay,
  ActaDisplay2,
  ActaBook,
  ActaBook2,
  ActaBold,
  ActaBold2,
  ActaHeadlineBook,
  ActaHeadlineBook2,
  ActaHeadlineBookItalic,
  ActaHeadlineBookItalic2,
  Axiforma,
  Axiforma2
} from './fonts'

const titlesizes = () => [...Array(6).keys()].map((i) => {
  return `h${6 - i} {
    font-size: ${math(`(${theme.fontTitleSize} / 6) * ${i + 1}`)};
    line-height: 1;
    @media(max-width: 800px){
      font-size: ${math(`(${theme.fontTitleSizeMobile} / 6) * ${i + 1}`)};
    }
	}`
})

export default createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Acta Display';
    src: url(${ActaDisplay2}) format('woff2'),
         url(${ActaDisplay}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url(${ActaBook2}) format('woff2'),
          url(${ActaBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url(${ActaBold2}) format('woff2'),
          url(${ActaBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url(${ActaHeadlineBook2}) format('woff2'),
          url(${ActaHeadlineBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url(${ActaHeadlineBookItalic2}) format('woff2'),
          url(${ActaHeadlineBookItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url(${ActaAgate2}) format('woff2'),
          url(${ActaAgate}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url(${ActaAgateB2}) format('woff2'),
          url(${ActaAgateB}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axiforma';
    src: url(${Axiforma2}) format('woff2'),
          url(${Axiforma}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html{
    box-sizing: border-box;

    @media(max-width: 800px){
        font-size: 80%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${theme.background};
    color: ${theme.color};
    font-family: ${theme.fontBody};
    font-size: ${theme.fontSize};
    line-height: ${theme.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  p{
    font-family: ${theme.fontBody};
    font-size: ${theme.fontSize};
    line-height: ${theme.lineHeight};
  }

  h1,h2,h3,h4,h5,h6{
    font-family: ${theme.fontTitle};
    font-weight: bold;
    letter-spacing: -1px;
    ${'' /* text-transform: uppercase; */}
  }

  h4{
    font-family: ${theme.fontBody};
    text-transform: none;
    padding: 0 1rem;
  }

  ${titlesizes}

  *:focus {
    outline: none;
  }

  .more-link,
  .link-more{
    display: none !important;
  }

  em{
    font-style: italic;
  }

  .full{
    margin-left: -1rem;
    margin-right: -1rem;
  }

  a{
    text-decoration: none;
    color: inherit;
  }


`