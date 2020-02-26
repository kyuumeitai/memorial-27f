
import React from "react"
import { graphql } from "gatsby"
import { StBlock } from "../Content/style.css"
import Block from "../Content/Block"

const PostBlock = ({ post }) => {
  const imgfilename = post.attached_mainimg ? post.attached_mainimg.localFile.childImageSharp.bg : null;

  const { portadilla, bajada_corta, imagen_opaca, video, video_iframe} = post.acf
  const bajada = bajada_corta ? bajada_corta : post.excerpt
  const videosrc = video ? video : portadilla
  return (
    <Block {...post} to={post.slug} video_iframe={video_iframe} videosrc={videosrc} imgfilename={imgfilename} bajada={bajada} imgopacity={imagen_opaca} ></Block>
  )
}

export default PostBlock

export const postFragmentBlock = graphql`
  fragment PostContentBlock on wordpress__POST {
    title
    slug
    raw
    excerpt
    attached_mainimg
    acf {
      autor
    }
  }
`