import { useStaticQuery, graphql } from 'gatsby'

const FindLocalImage = (filename) => {

  const imagelocalquery = useStaticQuery(
    graphql`
			query {
				localimages: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
					edges {
						node {
              base
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
    `
  )

  const imgarray = [
    ...imagelocalquery.localimages.edges,
  ]

  const queriedpost = imgarray.find((n) => {
    if (filename) {
      return n.node.base.includes(filename)
    }
  })
  if (!queriedpost) {
    return null
  }

  return queriedpost
  // return null
}

export default FindLocalImage
