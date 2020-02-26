import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import get from 'lodash/get'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Post from "../components/Post"
import FindImage from '@/components/Image/findimage'

const PostPage = ({ data }) => {
  const postdata = data.wordpressPost
  const attached_mainimg = get(postdata, 'attached_mainimg')
  const imgsocial = FindImage(attached_mainimg)
  const imgsrc = imgsocial ? imgsocial.node.imageFile.childImageSharp.image.src : null
  // const imgsrc = null

  return (
    <Layout>
      <Seo title={postdata.title} description={postdata.excerpt} slug={postdata.slug} img={imgsrc} />
      <Post post={postdata} single />
    </Layout>
  )
}

PostPage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(
      id: {
        eq: $id
      }
    ) {
      id
      ...PostContent
    }
  }
`


export default PostPage

