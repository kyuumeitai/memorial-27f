import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.header`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	justify-items: center;
	position: fixed;
	width: 100%;
	padding: 1rem 1.3rem;
	z-index: 4;
	top: 0;
	background-color: transparent;
	height: ${theme.headerHeight};
	/* @media(max-width: 1000px){
		grid-template-columns: 1fr;
		justify-items: flex-end;
	} */
	.menu-button{
		color: ${theme.clearcolor};
	}
	&:after{
		content: '';
		position: absolute;
		background: linear-gradient(rgba(0,0,0,0.8), transparent);
		left: 0;
		right: 0;
		top: 0;
		height: 15vh;
		z-index: -1;
		@media(max-width: 800px){
			background: linear-gradient(rgba(0,0,0,0.8), transparent);
			height: 10vh;
		}
	}
	.col-menu{

	}
	.col{
		&:first-of-type{
			justify-self: flex-start;
		}
		&:last-of-type{
			justify-self: flex-end;
		}
		display: flex;
		align-items: center;
	}
	.btn-suscribete{
		background-color: ${theme.color};
		color: ${theme.background};
    text-decoration: none;
		border-radius: 6px;
		font-family: 'Open Sans', sans-serif;
		font-size: 0.8rem;
		padding: 0.4rem 0.6rem;
		text-transform: uppercase;
		margin: 6px 1rem;
		line-height: 0.8rem;
		display: block;
		border: 1px solid ${theme.color};
		&:hover{
			background-color: ${theme.background};
			color: ${theme.color};
			border: 1px solid ${theme.color};
		}
	}
	.col2{
		@media(max-width: 800px){
			display: none;
		}
	}

	.slotSponsor {
		font-size: 1rem;
		color: white;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		@media(max-width: 1000px){
			font-size: 10px;
			line-height: 10px;
			grid-template-columns: 1fr;
			justify-items: flex-end;
		}
		span {
			display: block;
			padding-bottom: 2px;
			@media(max-width: 1000px){
				max-width: 100px;
				text-align: right;
			}
		}
		svg,
		img {
			padding-left: 5px;
			width: 80px;
			height: 40px;
		}
	}


	.slotLT {
		@media (max-width: 880px) {
			display: none;
		}
	}
`;

const StLogo = styled.h1`
	font-family: ${theme.fontbody};
	font-size: 9px;
	text-align: center;
	color: black;
	svg,
	img {
		min-width: 120px;
		max-width: 120px;
		max-height: 28px;
		@media (max-width: 800px) {
			max-height: 28px;
			min-width: 120px;
		}
	}
`;

export { Container, StLogo };
