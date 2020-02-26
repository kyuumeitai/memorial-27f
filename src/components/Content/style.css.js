import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const KeyframeArrow = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledInfo = styled.div`
  margin-left: auto;
  margin-right: auto;
	/* padding-top: ${theme.headerHeight}; */
  .title{
    font-size: 2rem;
    line-height: 1.1;
    font-weight: normal;
    margin: 0 0;
    padding: 0;
    flex: 0;
		text-align: center;
		padding: ${theme.spacing};
  }

`;

const StBlock = styled.div`
	margin-block-start: 4rem;
	margin-block-end: 4rem;
	.blockLinkClick{
		text-align: center;
		color: ${theme.color};
		background-color: ${theme.background};
		display: block;
		text-decoration: none;
	}
	h1{
		font-size: 2rem;
	}
	.blockSticky{
	}
	.blockWrap{

	}
	.blockText{
		.blockTextTop{
			text-align: center;
		}
		.blockImage{
		}
		.blockTextBottom{
			text-align: center;
			padding: 0 1rem;
		}
		h2{
			max-width: ${theme.normalWidth};
			line-height: 1.2;
			margin-left: auto;
			margin-right: auto;
		}
		.excerpt{
			max-width: ${theme.normalWidth};
			margin-left: auto;
			margin-right: auto;
			font-size: 1.2rem;
		}
	}

	.button-more{
		text-transform: uppercase;
		padding: 1rem 1rem;
		display: block;
		background-color: ${theme.color};
		color: ${theme.background};
		text-decoration: none;
		border-radius: 4px;
		display: inline-block;
		padding: 0.75rem 1rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 2rem;
		svg{
			margin-right: 0.2rem;
		}
		&:hover{
			background-color: ${theme.color};
			color: ${theme.background};
		}
	}
`

const StTitle = styled.h2`
	font-size: 3rem !important;
`

const Container = styled.section`
	position: relative;
	min-height: 40vh;
	margin-left: auto;
	margin-right: auto;
	padding: ${theme.spacing};
	@media(max-width: 800px){
		padding: 1rem;
	}
	.share-wrap {
		display: flex;
		justify-content: center;
    padding: 1rem 0;
	}
`;

const HeroContainer = styled.div`
	position: relative;
	max-height: 100vh;
	display: flex;
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2;
		padding: 1rem;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}
	.wrap {
		overflow: hidden;
	}
	.more {
		position: absolute;
		bottom: 0;
		text-transform: uppercase;
		font-size: 10px;
		text-align: center;
		letter-spacing: 1px;
		padding: 4rem;
		left: 0;
		right: 0;
    font-family: ${theme.fonttitle};
		.icon {
			display: block;
			margin: 12px auto 0;
			animation: ${KeyframeArrow} 1.5s ease-in-out 0s infinite;
		}
	}
`;

const StyledImage = styled(Image)`
  width: 100vw;
  height: 100vh;
`;

const StFigureImage = styled.figure`
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
`

const StSubpost = styled.article`
	margin-block-end: 4rem;
	margin-block-start: 8rem;
	.overallLink{
		text-decoration: none;
		color: inherit;
	}
	h2.title{
		body &{
			margin-block-start: 2rem;
		}
	}
`

const StContent = styled.div`
	a{
		color: ${theme.color};
	}
	.header-margin{
		margin-top: ${theme.headerHeight};
	}
	h2,
	h3,
	p {
		max-width: ${theme.normalWidth};
		margin-left: auto;
		margin-right: auto;
		line-height: ${theme.lineheight};
		margin-block-start: ${theme.fontsize};
		margin-block-end: ${theme.fontsize};
		padding: 0 1rem;
	}
	h2,
	h3 {
		font-family: ${theme.fonttitle2};
    line-height: 1.1;
    text-align: center;
	}
	p,
	ul li,
	ol {
		font-size: 1.2rem;
		line-height: 1.5;
		&.has-drop-cap {
			&:first-letter {
				float: left;
				font-family: ${theme.fonttitle};
				color: ${theme.accent};
				font-size: 7.4rem;
				line-height: 4rem;
				padding-top: 1.7rem;
				padding-right: 4px;
				padding-left: 3px;
			}
		}
		@media(max-width: 800px){
			font-size: 1.4rem;
		}
	}
	li {
		margin-block-end: 1rem;
	}
	ul {
		margin-block-end: 1rem;
	}
	.excerpt{
		text-align: center;
		font-size: 1.4rem;
		line-height: 1.4;
		font-style: italic;
	}
	.author{
		text-align: center;
		font-size: 1.2rem;
		line-height: 1.4;
		margin-block-end: 1.4rem;
	}
	h2.title{
		max-width: ${theme.maxWidth};
		margin-left: auto;
		margin-right: auto;
		margin-block-start: 8rem;
		margin-block-end: ${theme.fontsize};
		padding: 0 1rem;
		font-size: 4rem;
	}
	.morewrap{
		text-align: center;
	}
	.more{
		background-color: ${theme.color};
		color: ${theme.background};
		text-decoration: none;
		border-radius: 4px;
		display: inline-block;
		padding: 0.75rem 1rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: bold;
		margin-block-start: 2rem;
	}
`;

const Button = styled.div`
	transition: all 300ms ease-out;
	font-size: 2rem;
	width: auto;
	display: block;
	max-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.accent};
	border: 3px solid;
	border-color: ${theme.accent};
	margin-left: auto;
	margin-right: auto;
	padding: 0.5rem;
	margin-block-start: 1rem;
	margin-block-end: 1rem;
	span {
		font-size: 1rem;
		padding-right: 1rem;
	}
	&:hover,
	&:active {
		color: ${theme.color};
		background-color: ${theme.accent};
	}
`;

const Col = styled.div`
	display: grid;
	grid-template-columns: 1fr 5rem;
	align-items: center;
	grid-gap: 10px;
`;

const StRelatedBg = styled.div`
	background-color: ${theme.color};
	color: ${theme.background};
`

const StRelatedHeader = styled.header`
	padding: 1rem;
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	h3{
		font-size: 2rem;
		text-align: left;
		max-width: none;
		margin-block-start: 1rem;
		margin-block-end: 1rem;
	}
`

const StRelatedWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	grid-auto-flow: dense;
	@media(max-width: 800px){
		grid-template-columns: 1fr;
		padding-left: 1rem;
		padding-right: 1rem;
	}

`

const StRelated = styled.div`
	a.overallLink{
		display: block;
		color: inherit;
		text-decoration: none;
		position: relative;
		&:after{
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 50%;
			background: linear-gradient(transparent, black)
		}
	}

	.subpostTitle{
		font-size: 1.2rem;
		padding: 0;
		margin: 0;
	}
	figure{
		margin: 0;
	}
	.more{
		margin-block-start: 0.5rem;
	}
	.subpostContent{
		padding: 1rem;
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
	}
	.excerpt{
		display: none;
	}
	@media(max-width: 800px){
		a.overallLink{
			display: grid;
			grid-template-columns: 2fr 1fr;
		}
		.subpostContent{
			position: static;
			order: -1;
		}
		figure{
			max-height: 3rem;
		}
	}
	&:first-of-type{
		background-color: white;
		color: black;
		grid-column: 1 / -1;
		align-items: center;
		a.overallLink{
			display: grid;
			grid-template-columns: 3fr 2fr;
			&:after{
				display: none;
			}
		}
		.subpostTitle{
			font-size: 2rem;
			padding: 0;
			margin-block-start: 1rem;
		}
		.subpostContent{
			position: static;
			order: 1;
		}
		figure{
			padding: 1rem;
			max-height: none;
		}
		.excerpt{
			display: block;
		}
		@media(max-width: 800px){
			a.overallLink{
				grid-template-columns: 1fr;
			}
			figure{
				padding: 0;
			}
			.excerpt{
				display: none;
			}
		}
	}

	&.tall {
		grid-row: span 2;
	}
`

const StBackButton = styled.div`


`


export { StFigureImage, Container, StContent, StyledImage, HeroContainer, Col, StyledLink, Button, StyledInfo, StBlock, StTitle, StSubpost, StRelatedWrap, StRelated, StRelatedBg, StRelatedHeader, StBackButton};
