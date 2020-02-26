import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BgImage from './BgImage'
import { StNonProcessedImage } from './style.css'

const getFiles = (props) => {
  const { files } = useStaticQuery(
    graphql`
      query {
        files: allFile {
					edges {
						node {
              sourceInstanceName
							relativePath
							name
							publicURL
						}
					}
				}
      }
    `
  )

}
export default getFiles;
