import React from 'react'
import Post from '@/components/Post'

import { useStaticQuery, graphql } from 'gatsby'
import { StPostsChicos, StPostsChicosWrapper } from './style.css'

const Posts = ({actualSlug}) => {
  const { posts } = useStaticQuery(
    graphql`
      query posts {
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
    <>
      {
        orderedPosts.map((post, index) => {
          if (actualSlug === post.node.slug){
            return null
          }

          return (
            <Post post={post.node} key={index} />
          )
        })
      }
    </>
  )
}


export default Posts