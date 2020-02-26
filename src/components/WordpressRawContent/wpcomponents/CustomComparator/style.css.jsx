import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StCustomComparator = styled.div`
  max-width: ${theme.overWidth};
  font-weight: 600;
  padding: ${theme.spacing};
  margin-block-start: ${theme.verticalSpacing};
  margin-block-end: ${theme.verticalSpacing};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    max-width: 90%;
  }

`

export { StCustomComparator }