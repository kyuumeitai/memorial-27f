import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Share from '@/components/Sharer'
import {SharerWrapper} from './style.css'

const ACFSharer = ({ slug, title }) => {
  const toslug = slug ? `${slug}/` : ''
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            domain
            fbappid
            shareimg
            siteName
            title
            twitterHandle
            url
          }
        }
      }
    `
  )

  return (
    <SharerWrapper>
      <Share
        socialConfig={{
          twitterHandle: `${site.siteMetadata.twitterHandle}`,
          config: {
            url: `${site.siteMetadata.url}/${toslug}`,
            title: `${title} - ${site.siteMetadata.title} - ${site.siteMetadata.siteName}`,
            hashtags: site.siteMetadata.hashtags
          }
        }}
      />
    </SharerWrapper>
  )
}

export default ACFSharer