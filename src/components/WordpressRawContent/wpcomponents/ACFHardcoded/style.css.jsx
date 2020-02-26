import styled from 'styled-components'
import theme from '../../../../styles/theme'

const StACFHardcoded = styled.div`
  .links-cols{
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.maxWidth};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media(max-width: 800px){
      grid-template-columns: 1fr;
      padding-left: ${theme.spacing};
      padding-right: ${theme.spacing};
      padding-top: ${theme.spacing};
    }
  }
  a{
    color: white;
    text-decoration: none;
    display: block;
  }
  figure{
    margin: 0;
    h3{
      font-family: ${theme.fontbody};
      font-size: ${theme.fontsize};
    }
    .gatsby-image-wrapper{
      border: 1px solid #ccc;
    }
  }
`

const StPdfPlayer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem;
  max-width: ${theme.maxWidth};
`

export { StACFHardcoded, StPdfPlayer };