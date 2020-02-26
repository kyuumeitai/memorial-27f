import React from 'react'
import Image from '@/components/Image'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StPostsBlocks, StPostBlock, LinkUp, LinkDown } from './style.css'

const PostBlock = ({post}) => {
  return (
    <StPostBlock>
      <Link to={`/${post.slug}`}>
        <LinkUp>
          <Image originalurl={post.attached_mainimg} />
          <h2>{post.title}</h2>
        </LinkUp>
        <LinkDown>
          <FontAwesomeIcon className="icon" icon={['far', 'eye']} />
          <span>Leer más</span>
        </LinkDown>
      </Link>
    </StPostBlock>
  )
}

const PostsBlocks = ({actualSlug}) => {
  const { posts } = useStaticQuery(
    graphql`
      query postsBlocks {
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
            <PostBlock post={post.node} />
          )
        })
      }
    </StPostsBlocks>
  )
}


export default PostsBlocks