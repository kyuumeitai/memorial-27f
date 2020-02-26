import styled from 'styled-components'
import { math } from 'polished'
import theme from '@/styles/theme'

const StWPParagraph = styled.div`
  p{
		max-width: ${theme.normalWidth};
		margin-left: auto;
		margin-right: auto;
		font-size: ${theme.fontsize};
		line-height: ${theme.lineheight};
		text-align: left;
		padding-left: ${theme.spacing};
		padding-right: ${theme.spacing};
		margin-bottom: ${math(`${theme.spacing}`)};
		&.has-drop-cap {
			&:first-letter {
				float: left;
				font-family: ${theme.fonttitle};
				/* color: ${theme.accent}; */
				font-size: 7.9rem;
				line-height: 4.2rem;
				padding-top: 1.9rem;
				padding-right: 4px;
				padding-left: 3px;
				font-style: normal;
			}
		}
		@media(max-width: 800px){
			/* font-size: 1.4rem; */
		}
		a{
			color: ${theme.accent};
		}
		strong{
			font-weight: bold;
		}
		&.has-text-align-center{
			text-align: center;
		}
		&.explicacion{
			font-size: 13px;
		}
	}


`

export { StWPParagraph }