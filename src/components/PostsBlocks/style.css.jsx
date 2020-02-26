import styled from 'styled-components'
import theme from '@/styles/theme'

const StPostsBlocks = styled.div`
  display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	grid-gap: 1.5rem;
	/* margin-top: 1.5rem; */
	margin-bottom: 1.5rem;
	@media(max-width: 800px){
		grid-template-columns: 1fr;
	}
`

const StPostBlock = styled.div`
	.gatsby-image-wrapper{
		min-height: 300px;
	}
	> a{
		display: grid;
		height: 100%;
		grid-template-rows: 1fr auto;
		grid-gap: 1.5rem;
	}
	h2{
		margin-top: 0.75rem;
		font-size: 1.5rem;
	}
	@media(max-width: 800px){
		padding-left: 1rem;
		padding-right: 1rem;
	}
`

const LinkUp = styled.div``
const LinkDown = styled.div`
	display: flex;
	svg{
		color: ${theme.complementary};
		margin-right: 0.2rem;
	}
	span{
		font-size: 1rem;
		line-height: 1;
	}
`

export { StPostsBlocks, StPostBlock, LinkUp, LinkDown }