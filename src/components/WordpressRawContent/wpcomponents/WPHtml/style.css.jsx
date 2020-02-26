import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StWPHtml = styled.div`
	max-width: ${theme.normalWidth};
	margin: ${theme.verticalSpacing} auto;
	padding-left: ${theme.spacing};
	padding-right: ${theme.spacing};
	.video-responsive-16x9{
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 25px;
		height: 0;
		iframe{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
`

export { StWPHtml }