import React from 'react'
import { Waypoint } from 'react-waypoint'
import { useStaticQuery, graphql } from 'gatsby'
import { StIntro } from './style.css'


const Intro = () => {
  const { wordpressPost }  = useStaticQuery(
    graphql`
      query {
        wordpressPost(wordpress_id: { eq: 3858 }) {
          content
        }
      }
    `
  )
  return (
    <Waypoint>
      <StIntro dangerouslySetInnerHTML={{ __html: wordpressPost.content }}>

      </StIntro>
    </Waypoint>
  )
}

export default Intro
