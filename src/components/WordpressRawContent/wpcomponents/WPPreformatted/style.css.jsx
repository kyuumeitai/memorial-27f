import styled from 'styled-components'
import theme from '@/styles/theme'

const StWPPreformatted = styled.div`
  max-width: ${theme.normalWidth};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${theme.verticalSpacing};
  margin-bottom: ${theme.verticalSpacing};
  padding-left: ${theme.spacing};
  padding-right: ${theme.spacing};
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  pre {
    white-space: pre-wrap;
    overflow-x: auto;
  }

`

export { StWPPreformatted }