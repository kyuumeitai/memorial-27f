import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import share from '../../images/share.jpg'

function Seo({ description, lang, meta, keywords, title, img, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            twitterHandle
            domain
            fbappid
          }
        }
      }
    `
  )
  const striphtml = (str) => (str.replace(/<(?:.|\n)*?>/gm, ''))
  const metaDescription = striphtml(description || site.siteMetadata.description)
  const shareimg = img || share
  const postslug = slug ? `${slug}/` : '/'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title ? title : site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.url}/${postslug}`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.domain}${shareimg}`,
        },
        {
          property: `fb:app_id`,
          content: `${site.siteMetadata.fbappid}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterHandle,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterHandle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${site.siteMetadata.domain}${shareimg}`,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0, maximum-scale=1.0"`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo
