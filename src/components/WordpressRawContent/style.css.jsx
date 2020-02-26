import styled from 'styled-components'
import theme from '../../styles/theme'

const StWordpressRaw = styled.div`
	.sticky {

		grid-template-columns: 1fr 3fr;
		grid-gap: 2rem;
		align-items: flex-start;
		transform: translate3d(0px, 0px, 0px);
		padding: 0 1rem;
		margin-block-end: 10vh;
		&:last-of-type{
			margin-block-end: 80vh;
		}
		@media(max-width: 800px){
			grid-gap: 1rem;
			grid-template-columns: 120px 1fr;
		}
		p{
			max-width: none;
			padding: 0;
		}
		h2,
		h3{
			text-align: right;
			padding: 0;
		}
		h2{
			font-size: 3rem;
			@media(max-width: 800px){
				font-size: 2rem;
			}
		}
		h3{
			font-size: 2.5rem;
			margin: 0.5rem 0 0;
			@media(max-width: 800px){
				font-size: 1.8rem;
			}
		}
		.coreColumn{
			&:first-child{

				position: sticky;
				top: 20vh;
				display: flex;
				align-items: flex-end;
				flex-direction: column;
				figure{
					width: 80px;
					height: 80px;
					margin-bottom: 0.5rem;
					margin: 0;
					border-radius: 100px;
					overflow: hidden;
				}
			}
			&:last-child{

				padding-top: 40vh
			}
		}
	}

	h1,h2,h3,h4,h5,h6{
		max-width: ${theme.normalWidth};
		margin-left: auto;
		margin-right: auto;
	}

	.wp-block-separator {
		border-color: ${theme.accent};
		max-width: ${theme.normalWidth};
	}

	/* video{
		max-width: ${theme.maxWidth};
		margin-left: auto;
		margin-right: auto;
		@media(max-width: 800px){
			margin-left: -1rem;
			margin-right: -1rem;
		}
	} */
	.customembedvideo{
		margin-left: auto;
		margin-right: auto;
		max-width: ${theme.maxWidth};
		margin-block-start: 4rem;
		margin-block-end: 4rem;
	}

	.stickied{
		display: grid;
		height: ${props => props.height || 'auto'};
		/* grid-template-columns: ${props => props.gridtemplatecolumns || 'repeat(2, 1fr)'}; */
		grid-template-columns: 1fr 3fr;
		max-width: ${theme.maxWidth};
		margin-left: auto;
		margin-right: auto;
		grid-gap: 2rem;
		align-items: flex-start;
		transform: translate3d(0px, 0px, 0px);
		padding: 0 1rem;
		margin-block-end: 10vh;
		&:last-of-type{
			margin-block-end: 80vh;
		}
		@media(max-width: 800px){
			grid-gap: 1rem;
			grid-template-columns: 120px 1fr;
		}
		p{
			max-width: none;
			padding: 0;
		}
		h2,
		h3{
			text-align: right;
			padding: 0;
		}
		h2{
			font-size: 3rem;
			@media(max-width: 800px){
				font-size: 2rem;
			}
		}
		h3{
			font-size: 2.5rem;
			margin: 0.5rem 0 0;
			@media(max-width: 800px){
				font-size: 1.8rem;
			}
		}
		.gatsby-image-wrapper{
			border-radius: 100px;
			overflow: hidden;
		}
		.coreColumn{
			&:first-of-type{
				position: sticky;
				top: 20vh;
				display: flex;
				align-items: flex-end;
				flex-direction: column;
				figure{
					width: 80px;
					height: 80px;
					margin-bottom: 0.5rem;
					margin: 0;
				}
			}
		}
		.coreColumn{
			&:last-of-type{
				padding-top: 40vh;
				/* padding-bottom: 20vh; */
			}
		}
	}
`

const CoreColumnBlock = styled.div`
  max-width: none;
`

const CoreColumns = styled.div`
	display: grid;
	height: ${props => props.height || 'auto'};
	grid-template-columns: ${props => props.gridtemplatecolumns || 'repeat(2, 1fr)'};
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	grid-gap: 2rem;
	align-items: flex-start;
	transform: translate3d(0px, 0px, 0px);
	padding: 0 1rem;
	margin-block-end: 10vh;
	&:last-of-type{
		margin-block-end: 80vh;
	}
	@media(max-width: 800px){
		grid-gap: 1rem;
		grid-template-columns: 120px 1fr;
	}
	p{
		max-width: none;
		padding: 0;
	}
	h2,
	h3{
		text-align: right;
		padding: 0;
	}
	h2{
		font-size: 3rem;
		@media(max-width: 800px){
			font-size: 2rem;
		}
	}
	h3{
		font-size: 2.5rem;
		margin: 0.5rem 0 0;
		@media(max-width: 800px){
			font-size: 1.8rem;
		}
	}
	.gatsby-image-wrapper{
		border-radius: 100px;
		overflow: hidden;
	}
	.col{
		&:first-of-type{
			position: sticky;
			top: 20vh;
			display: flex;
			align-items: flex-end;
			flex-direction: column;
			figure{
				width: 80px;
				height: 80px;
				margin-bottom: 0.5rem;
			}
		}
	}
	.col{
		&:last-of-type{
			padding-top: 40vh;
			/* padding-bottom: 20vh; */
		}
	}
`;

export { StWordpressRaw, CoreColumnBlock, CoreColumns};
