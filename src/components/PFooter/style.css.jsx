
import styled from 'styled-components';
import theme from '../../styles/theme';

const StPFooter = styled.div`
  text-align: center;
  padding: ${theme.verticalSpacing} 1rem;
  background-color: ${theme.color};
  color: ${theme.background};
  h2{
    line-height: 1;
    font-family: 'Acta Display', sans-serif;
  }
  &:hover{
    >a{
      button{
        background-color: ${theme.color};
        color: ${theme.background};
      }
    }
  }
  >a{
    color: inherit;
    text-decoration: none;
    display: block;
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;

    button{
      transition: all .3s;
      text-transform: uppercase;
      padding: 1rem 1rem;
      display: block;
      background-color: ${theme.background};
      color: ${theme.color};
      border: 1px solid ${theme.background};
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
    }
  }
`

export {StPFooter}

