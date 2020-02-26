import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import WordpressRawContent from '@/components/WordpressRawContent'
import Share from '@/components/Sharer'
import Image from '@/components/Image'
import { StyledPost, StyledImg } from './style.css'

const Post = ({ post, single }) => {
  const { raw, slug, title, excerpt } = post
  const autor = get(post, 'acf.autor')
  const post_background_color = get(post, 'acf.post_background_color')
  const remove_title_excerpt = get(post, 'acf.remove_title_excerpt')
  const img = get(post, 'attached_mainimg')

  const MainImg = ({ img}) => {
    if(!img) return null
    return (
      <StyledImg>
        <Image originalurl={img} />
      </StyledImg>
    )
  }

  const LinkClick = ({ single, slug, children }) => {
    if(single) {
      return (
        <div className="linkClick">
          {children}
        </div>
      )
    } else {
      return (
        <Link className="linkClick" to={`/${slug}/`}>
          {children}
        </Link>
      )
    }
  }

  return (
    <StyledPost bgColor={post_background_color}>
      <LinkClick single={true} slug={slug}>
        {
          !remove_title_excerpt && (
            <div className="defaultHeader">
              <h1 className="title">{title}</h1>
              <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
              <div className="share-wrap">
                <Share
                  socialConfig={{
                    twitterHandle: 'latercera',
                    config: {
                      url: `https://interactivo.latercera.com/27f/${slug}/`,
                      title: `${title}`,
                      // hashtags: ['18D']
                    }
                  }}
                />
              </div>
              {
                autor && (
                  <div className="author">Por: <strong>{autor}</strong></div>
                )
              }
            </div>
          )
        }

        <WordpressRawContent raw={raw} slug={slug} title={title} single={single} author={autor} bgColor={post_background_color}  />

        {
          single && (
            <Link className="backbutton" to="/">
              Volver
            </Link>
          )
        }
      </LinkClick>
    </StyledPost>
  )
}

export default Post

export const postFragment = graphql`
  fragment PostContent on wordpress__POST {
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
`