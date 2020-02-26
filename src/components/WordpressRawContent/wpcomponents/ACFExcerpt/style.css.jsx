import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StACFExcerpt = styled.p`
	max-width: ${theme.normalWidth};
	margin: 0 auto;
	padding: ${theme.spacing};
	font-size: ${theme.fontsize};
	line-height: ${theme.lineheight};
	text-align: center;
	font-style: italic;
	a{
		color: ${theme.accent};
	}
	strong{
		font-weight: bold;
	}
`

export { StACFExcerpt }