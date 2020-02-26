import { useStaticQuery, graphql } from 'gatsby'

const FindImage = (originalurl, filename, format) => {

  const imagequery = useStaticQuery(
    graphql`
			query {
				imagesinacf: allContentImages(filter: {contentImageSource: {eq: "attached_images_in_acf"}}) {
					edges {
						node {
							url
              contentImageSource
              imageFile{
                publicURL
								childImageSharp {
									image: fluid(
										maxWidth: 500,
										quality: 70
									) {
										...GatsbyImageSharpFluid
									}
                }
              }
						}
					}
				}
        contentimages: allContentImages(filter: {contentImageSource: {eq: "attached_contentimages"}}) {
					edges {
						node {
							url
              contentImageSource
              imageFile{
                publicURL
								childImageSharp {
									image: fluid(
										maxWidth: 1400,
										quality: 70
									) {
										...GatsbyImageSharpFluid
									},
                }
              }
						}
					}
				}
        mainimg: allContentImages(filter: {contentImageSource: {eq: "attached_mainimg"}}) {
					edges {
						node {
							url
              contentImageSource
              imageFile{
                publicURL
								childImageSharp {
									image: fixed(
										width: 1200,
                    height: 630,
										quality: 80
									) {
										...GatsbyImageSharpFixed
									}
                }
              }
						}
					}
				}
			}
    `
  )

  const imgarray = [
    ...imagequery.imagesinacf.edges,
    ...imagequery.contentimages.edges,
    ...imagequery.mainimg.edges
  ]

  const queriedpost = imgarray.find((n) => {
    if (format && originalurl) {
      return n.node.url === originalurl && n.node.contentImageSource === format
    } else
      if (format && filename) {
        return n.node.url.includes(filename) && n.node.contentImageSource === format
      } else
        if (originalurl) {
          return n.node.url === originalurl
        } else
          if (filename) {
            return n.node.url.includes(filename)
          }
  })
  if (!queriedpost) {
    return null
  }

  return queriedpost
  // return null
}

export default FindImage
