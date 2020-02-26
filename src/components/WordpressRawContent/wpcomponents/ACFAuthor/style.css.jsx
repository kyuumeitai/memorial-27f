import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StACFAuthor = styled.p`
	margin-left: auto;
	margin-right: auto;
	max-width: ${theme.normalWidth};
	text-align: center;
	font-family: 'Acta Sans', sans-serif;
	margin-block-start: ${theme.spacing};
	margin-block-end: ${theme.spacing};
	text-transform: uppercase;
	text-align: center;
`

export { StACFAuthor }