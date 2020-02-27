
import styled from 'styled-components';
import theme from '../../styles/theme';

const StCredits = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: gray;
  color: ${theme.color};
  .creditsWrapper{
    max-width: ${theme.normalWidth};
    padding: ${theme.verticalSpacing} 1rem;
    margin: 0 auto;
  }
  h2{
    line-height: 1;
    margin-bottom: 1rem;
  }

  p{
    margin-bottom: 1rem;
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
  }
  strong{
    font-weight: bold;
    display: block;
  }
`

export {StCredits}

