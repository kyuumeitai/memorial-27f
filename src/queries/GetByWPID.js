import { useStaticQuery, graphql } from 'gatsby'

const GetByWPID = (wpid) => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allWordpressPost {
          edges {
            node {
              wordpress_id
              slug
              title
              excerpt
              attached_mainimg
              raw
              acf{
                autor
              }
            }
          }
        }
      }
    `
  )
  const queriedpost = posts.edges.find((n) => {
    return n.node['wordpress_id'] === wpid
  })
  if (!queriedpost) {
    return null
  }
  return queriedpost.node
}


export default GetByWPID