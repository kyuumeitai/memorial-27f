import styled from 'styled-components'
import theme from '../../styles/theme'

const StPosts = styled.div`
  /* .button-more{
		text-transform: uppercase;
		padding: 1rem 1rem;
		display: block;
		background-color: ${theme.color};
		color: ${theme.background};
		text-decoration: none;
    border-radius: 4px;
    max-width: 180px;
    text-align: center;
		padding: 0.75rem 1rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: bold;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
		svg{
			margin-right: 0.2rem;
		}
		&:hover{
			background-color: ${theme.color};
			color: ${theme.background};
		}
	} */
`

const StPostsChicos = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 1.5rem;
	max-width: ${theme.maxWidth};
	margin-left: auto;
	margin-right: auto;
	padding: 1rem;
	@media(max-width: 800px){
		grid-gap: 1rem;
	}
`

const StPostsChicosWrapper = styled.div`
	> h3{
		text-align: center;
		padding: 1rem 0 0;
	}
`

export { StPosts, StPostsChicos, StPostsChicosWrapper }