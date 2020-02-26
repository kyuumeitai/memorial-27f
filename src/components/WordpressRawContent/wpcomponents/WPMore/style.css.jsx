import styled from 'styled-components'
import { getContrast, getLuminance } from 'polished'
import { Link } from 'gatsby'

import theme from '@/styles/theme'

const getFontColor = (bgcolor) => {
	return getLuminance(`${bgcolor}`) > 0.5 ? theme.darkcolor : theme.clearcolor;
}

const StWPMore = styled(Link)`
	/* border-color: ${ props => props.bgColor ? getContrast(`${props.bgColor}`, `${theme.complementary}`) <= 8 ? getFontColor(props.bgColor) : theme.complementary : theme.complementary }; */
	transition: all 300ms ease-out;
	text-decoration: none;
	font-size: 1.2rem;
	width: auto;
	display: block;
	max-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.clearcolor};
	background-color: ${theme.complementary};
	margin-left: auto;
	margin-right: auto;
	padding: 1rem 2.4rem;
	border-radius: 50px;
	margin-block-start: 1rem;
	margin-block-end: 3rem;
	svg{
		display: none;
	}
	span {
		font-size: 1rem;
		font-family: 'IBM Plex Mono', monospace;
	}
	&:hover,
	&:active {
		color: ${theme.background};
		background-color: ${theme.complementary};
	}
`


export { StWPMore }