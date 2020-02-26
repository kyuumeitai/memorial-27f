import React from "react"
import { StaticQuery, graphql } from "gatsby"
import VideoPlayer from '../VideoPlayer'

const Getvideo = (props) => (
  <StaticQuery
    query={graphql`
			query {
				videos: allFile(filter: {
          extension: { eq: "mp4" }
        }) {
					edges {
						node {
							relativePath
							name
							publicURL
						}
					}
				}
			}
		`}
    render={(data) => {
      const thevideo = data.videos.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!thevideo) {
        return null;
      }
      return <VideoPlayer url={thevideo.node.publicURL} />
    }}
  />
);

export default Getvideo;
