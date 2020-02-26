import styled from 'styled-components'
import theme from '@/styles/theme'

const StWPFigure = styled.figure`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-block-start: ${theme.verticalSpacing};
  margin-block-end: ${theme.verticalSpacing};
  overflow: hidden;
  max-width: ${theme.maxWidth};
  &.narrow{
    max-width: ${theme.normalWidth};
  }
  &.wide{
    max-width: ${theme.overWidth};
  }
  &.full{
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .figwrap {
    display: block;
    font-size: 0.9rem;
    margin-block-start: 0.2rem;
    padding-top: 0.2rem;
    padding-left: 1rem;
    position: relative;
    font-family: 'Acta Sans';
    text-transform: uppercase;
    &:before {
      content: "▲";
      position: absolute;
      top: 0;
      left: 0;
    }
    figcaption{
      display: inline-block;
      padding-left: 0.2rem;
    }
  }
`

export { StWPFigure }