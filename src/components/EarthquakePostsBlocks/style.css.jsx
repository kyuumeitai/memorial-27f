import styled from 'styled-components'
import theme from '@/styles/theme'
import { Link } from 'gatsby'

const StPostsBlocks = styled.div`

`

const StPostBlock = styled.div`
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	position: relative;
	padding-top: 5rem;
	padding-bottom: 5rem;
	.gatsby-image-wrapper{
		min-height: 500px;
		@media(max-width: 800px) {
			min-height: 200px;
		}
	}
	> a{
		display: grid;
		height: 100%;
		grid-template-rows: 1fr auto;
		grid-gap: 1.5rem;
	}
	h2{
		margin-top: 0.75rem;
		font-size: ${theme.fontTitleSize};
		@media(max-width: 800px){
			font-size: ${theme.fontTitleSizeMobile};
		}
	}
	@media(max-width: 800px){
		padding-left: 1rem;
		padding-right: 1rem;
	}
`

const StTitleBlock = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	height: 100%;
`

const StLink = styled(Link)`
  display: grid;
	grid-template-columns: 2fr 3fr;
	grid-gap: ${theme.spacing};
	align-items: center;
	@media(max-width: 800px){
		grid-template-columns: 1fr;
	}
	.morebutton{
		transition: all 300ms ease-out;
		text-decoration: none;
		font-size: 1.2rem;
		width: auto;
		display: block;
		max-width: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.clearcolor};
		background-color: ${theme.complementary};
		padding: 1rem 1rem;
		border-radius: 50px;
		margin-block-start: 1rem;
		margin-block-end: 1rem;
		svg{
			margin-right: 0.5rem;
		}
  }
`;

const ContainerSticky = styled.div`
	/* transform: translate3d(0, 0, 0); */
  align-items: flex-start;
	/* height: 200vh;
	margin-bottom: 20vh; */
	margin-bottom: 5rem;
	@media(max-width: 800px){
		/* margin-bottom: 50vh; */
	}

`

const Sticky = styled.div`
	/* position: sticky;
  top: 0;
  height: 100vh; */
	/* border: 3px solid #0f0; */
	/* padding: 5rem 2rem; */
`

export { StPostsBlocks, StPostBlock, ContainerSticky, Sticky, StLink, StTitleBlock }