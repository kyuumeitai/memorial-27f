import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BgImage from './BgImage';
import { StNonProcessedImage } from './style.css';

const Image = (props) => (
  <StaticQuery
    query={graphql`
			query {
				images: allFile {
					edges {
						node {
							relativePath
							name
							publicURL
							childImageSharp {
								fullwidth: fluid(
									maxWidth: 700,
									quality: 75
								) {
									...GatsbyImageSharpFluid
								},
							},
							childImageSharp {
								squareThumb: fixed(
									width: 300,
									height: 300
								) {
									...GatsbyImageSharpFixed_tracedSVG
								}
							}
						}
					}
				}
			}
		`}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        if (props.filename) {
          return n.node.relativePath.includes(props.filename)
        }
        if (props.originalurl) {
          return n.node.url === props.originalurl
        }
        return null
      })

      if (!image) {
        return null
      }

      if (!image.node.childImageSharp && image.node.publicURL) {
        return (
          <StNonProcessedImage>
            <img src={image.node.publicURL} alt="" />
          </StNonProcessedImage>
        );
      }

      const imageSizes = (imgtype) => {
        switch (imgtype) {
          case 'square':
            return image.node.childImageSharp.squareThumb
          default:
            return image.node.childImageSharp.fullwidth
        }
      }

      if (props.bg) {
        return <BgImage alt={props.alt} sizes={imageSizes(props.type)} />;
      }
      return <Img loading="eager" alt={props.alt} sizes={imageSizes(props.type)} objectFit="contain" objectPosition="50% 50%" />
    }}
  />
);

export default Image;
