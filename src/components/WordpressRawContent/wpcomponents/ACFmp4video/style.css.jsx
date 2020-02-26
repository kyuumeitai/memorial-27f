import styled from 'styled-components'
import theme from '@/styles/theme'

const ACFVideo = styled.div`
  position: relative;
  max-width: ${theme.maxWidth};
  margin: ${theme.verticalSpacing} auto;
  .figcaption{
    display: block;
    font-size: 0.9rem;
    margin-block-start: 0.2rem;
    padding-top: 0.2rem;
    padding-left: 1rem;
    position: relative;
    font-family: 'Acta Sans';
    text-transform: uppercase;
    padding-left: 0.2rem;
    text-align: right;
    text-decoration: none;
    &:before {
      content: "▲";
      padding-left: 0.2rem;
      /* position: absolute;
      top: 0;
      left: 0; */
    }
  }
`

const ShareWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > span{
    font-family: 'Acta Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding-right: 0.5rem;
  }
  .post-social{
    .button{
      width: 2.3rem;
      height: 2.3rem;
      margin-left: 0.3rem;
    }
    span{
      font-size: 1rem;
    }
  }
`

export { ACFVideo, ShareWrapper}