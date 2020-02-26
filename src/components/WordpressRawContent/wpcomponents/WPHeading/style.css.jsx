import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const Heading = styled.div`
  text-align: ${props => props.align || 'center'};
  line-height: 1;
  margin-block-start: ${theme.verticalSpacing};
  margin-block-end: ${theme.verticalSpacing};
`

export { Heading }

