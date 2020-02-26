import styled from 'styled-components'
import theme from '@/styles/theme'

const StWPGroup = styled.div`
  position: relative;
  padding: ${theme.verticalSpacing} 1rem;
  /* margin-bottom: ${theme.verticalSpacing};
  margin-top: ${theme.verticalSpacing}; */
  max-width: ${theme.normalWidth};
  margin-left: auto;
  margin-right: auto;
  &.full{
    max-width: none;
    margin-left: -2rem;
    margin-right: -2rem;
  }

  &.featured{
    margin-block-start: ${theme.verticalSpacing};
    margin-block-end: ${theme.verticalSpacing};
  }

  &.timeline-item{
    .wpcolumns{
      grid-template-columns: 70px 1fr;
      align-items: flex-start;
      div.coreColumn{
        &:last-of-type{
          >div{
            margin: 1rem 0;
          }
          h4{
            text-align: left;
            margin-left: 1rem;
          }
        }
        &:first-of-type{
          height: 100%;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            left: 50%;
            top: 64px;
            bottom: 0;
            width: 2px;
            background-image: linear-gradient(to bottom, transparent 50%, ${theme.complementary} 50%);
            background-size: 20px 20px;
          }
          >div{
            margin: 0;
          }
          h2{
            margin: 0 auto;
            width: 55px;
            height: 55px;
            border-radius: 55px;
            background: white;
            box-shadow: 0 3px 3px #cccccc;
            line-height: 55px;
            font-size: 1.87rem;
            color: ${theme.complementary};
          }
        }
      }
    }
  }

  &.lt-special-inverted{
    background-color: black;
    color: white;
    padding-top: ${theme.verticalSpacing};
    .wpcolumns{
      max-width: ${theme.maxWidth};
      margin-left: auto;
      margin-right: auto;
      &.logocolumn{
        grid-template-columns: 180px 1fr;
        align-items: center;
        @media(max-width: 800px){
          grid-template-columns: 1fr;
        }
        p{
          max-width: 100%;
          margin: 0;
        }
        .coreColumn{
          &:first-of-type{

            svg{
              max-height: 70px;
              max-width: 180px;
              @media(max-width: 800px){
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: ${theme.spacing};
                margin-top: ${theme.spacing};
              }
            }
          }
        }
      }
    }
  }
`

export {StWPGroup}

