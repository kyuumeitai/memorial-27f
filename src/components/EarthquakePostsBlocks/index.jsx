import React from 'react'
import Image from '@/components/Image'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StPostsBlocks, StPostBlock, ContainerSticky, Sticky, StLink, StTitleBlock } from './style.css'
import styled, { keyframes } from 'styled-components'

const tiriton1 = keyframes`
  0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
  20% {
    transform: translateX(-1px);
    -webkit-transform: translateX(-1px);
  }
  50% {
    transform: translateX(2px);
    -webkit-transform: translateX(2px);
  }
  70% {
    transform: translateX(-3px);
    -webkit-transform: translateX(-3px);
  }
  100% {
    transform: translateX(1px);
    -webkit-transform: translateX(1px);
  }
`

const tiriton2 = keyframes`
  0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
    -webkit-transform: translateX(-2px);
  }
  50% {
    transform: translateX(4px);
    -webkit-transform: translateX(4px);
  }
  70% {
    transform: translateX(-8px);
    -webkit-transform: translateX(-8px);
  }
  100% {
    transform: translateX(2px);
    -webkit-transform: translateX(2px);
  }
`

const tiriton3 = keyframes`
  0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
  20% {
    transform: translateX(-3px);
    -webkit-transform: translateX(-3px);
  }
  50% {
    transform: translateX(5px);
    -webkit-transform: translateX(5px);
  }
  70% {
    transform: translateX(-9px);
    -webkit-transform: translateX(-9px);
  }
  100% {
    transform: translateX(4px);
    -webkit-transform: translateX(4px);
  }
`

const swinger1 = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  15% {
    transform: rotateX(-5deg);
  }
  30% {
    transform: rotateX(2deg);
  }
  45% {
    transform: rotateX(-5deg);
  }
  60% {
    transform: rotateX(2deg);
  }
  75% {
    transform: rotateX(-5deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`

const swinger2 = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  15% {
    transform: rotateX(-5deg);
  }
  30% {
    transform: rotateX(5deg);
  }
  45% {
    transform: rotateX(-5deg);
  }
  60% {
    transform: rotateX(5deg);
  }
  75% {
    transform: rotateX(-5deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`

const swinger3 = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  15% {
    transform: rotateX(-8deg);
  }
  30% {
    transform: rotateX(8deg);
  }
  45% {
    transform: rotateX(-8deg);
  }
  60% {
    transform: rotateX(8deg);
  }
  75% {
    transform: rotateX(-8deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`

const swinger4 = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  15% {
    transform: rotateX(-10deg);
  }
  30% {
    transform: rotateX(10deg);
  }
  45% {
    transform: rotateX(-10deg);
  }
  60% {
    transform: rotateX(10deg);
  }
  75% {
    transform: rotateX(-10deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`

const StSwinger = styled.div`
  overflow: visible;
  perspective: 500;
  img{
      filter: grayscale(100%);
  }
  .gatsby-image-wrapper{
    overflow: visible !important;
  }
  .earthquake &{
    picture {
      img{
        transition: all 250ms ease;
        transform-origin: top;
        .phase1 &{
          animation: ${swinger1} 10s ease-in-out 110ms infinite alternate;
        }
        .phase2 &{
          animation: ${swinger2} 10s ease-in-out 110ms infinite alternate;
        }
        .phase3 &{
          animation: ${swinger3} 10s ease-in-out 110ms infinite alternate;
        }
        .phase4 &{
          animation: ${swinger3} 10s ease-in-out 110ms infinite alternate;
        }
        .phase5 &{
          animation: ${swinger4} 10s ease-in-out 110ms infinite alternate;
        }
        .phase6 &{
          animation: ${swinger4} 10s ease-in-out 110ms infinite alternate;
        }
      }
    }
  }
`

const StTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-right: 3rem;
  .earthquake & {
    /* width: 3px; */
    .phase1 &{
      animation: ${tiriton1} .1s infinite alternate;
    }
    .phase2 &{
      animation: ${tiriton1} .1s infinite alternate;
    }
    .phase3 &{
      animation: ${tiriton2} .1s infinite alternate;
    }
    .phase4 &{
      animation: ${tiriton2} .1s infinite alternate;
    }
    .phase5 &{
      animation: ${tiriton3} .1s infinite alternate;
    }
    .phase6 &{
      animation: ${tiriton3} .1s infinite alternate;
    }
    @media(max-width: 800px){
      margin-right: 3rem;
    }
    &:after,
    &:before{
      content: "${props => props.texto ? props.texto : ''}";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      /* width: 1px;
      /* background-color: white; */
    }
    .phase1 &{
      &:after {
        animation: ${tiriton1} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton1} 0.8s infinite alternate;
      }
    }
    .phase2 &{
      &:after {
        animation: ${tiriton1} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton1} 0.8s infinite alternate;
      }
    }
    .phase3 &{
      &:after {
        animation: ${tiriton2} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton2} 0.8s infinite alternate;
      }
    }
    .phase4 &{
      &:after {
        animation: ${tiriton2} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton2} 0.8s infinite alternate;
      }
    }
    .phase5 &{
      &:after {
        animation: ${tiriton3} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton3} 0.8s infinite alternate;
      }
    }
    .phase6 &{
      &:after {
        animation: ${tiriton3} .5s infinite alternate;
      }
      &:before {
        animation: ${tiriton3} 0.8s infinite alternate;
      }
    }
  }
`

const StTitleWrap = styled.div`
  max-width: 80%;
  overflow: visible;
`

const EarthquakeTitle = ({title}) => {
  return (
    <StTitleWrap>
      <StTitle texto={title}>
        {title}
      </StTitle>
    </StTitleWrap>
  )
}

const PostBlock = ({post}) => {
  return (
    <StPostBlock>
      <ContainerSticky>
        <Sticky>
          <StLink to={`/${post.slug}`}>
            <StTitleBlock>
              <EarthquakeTitle title={post.title} />
              <div className="morebutton">
                <FontAwesomeIcon className="icon" icon={['far', 'eye']} />
                <span>Leer más</span>
              </div>
            </StTitleBlock>
            <StSwinger>
              <Image originalurl={post.attached_mainimg} />
            </StSwinger>
          </StLink>
        </Sticky>
      </ContainerSticky>
    </StPostBlock>
  )
}

const PostsBlocks = ({actualSlug}) => {
  const { posts } = useStaticQuery(
    graphql`
      query EQpostsBlocks {
        posts: allWordpressPost {
          edges {
            node {
              wordpress_id
              title
              date
              slug
              raw
              excerpt
              attached_mainimg
              acf{
                autor
                post_background_color
              }
            }
          }
        }
      }
    `
  )

  const postsCopy = [...posts.edges]

  const actualIndex = actualSlug ? posts.edges.findIndex(item => item.node.slug === actualSlug) : null
  const orderedPosts = actualIndex ? [...postsCopy.splice(actualIndex), ...postsCopy] : postsCopy

  return(
    <StPostsBlocks>
      {
        orderedPosts.map((post, index) => {
          if (actualSlug === post.node.slug){
            return null
          }

          return (
            <PostBlock key={index} post={post.node} />
          )
        })
      }
    </StPostsBlocks>
  )
}


export default PostsBlocks