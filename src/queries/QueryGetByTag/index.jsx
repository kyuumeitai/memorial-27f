import { useStaticQuery, graphql } from 'gatsby'

const QueryGetByTag = (wptags) => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allWordpressPost(
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              wordpress_id
              title
              date
              slug
              raw
              excerpt
              attached_mainimg
              acf{
                autor
              }
            }
          }
        }
      }
    `
  )

  const searchbytag = (items, constraints) => {
    return items.filter(item =>
      constraints.every(constraint => {
        if (!item.node.tags) {
          return null
        }
        return item.node.tags.some(obj => obj.slug === constraint)
      }
      )
    )
  }

  const removenode = (arr) => {
    const newarr = []
    arr.map(item => {
      return newarr.push(item.node)
    })
    return newarr
  }

  const queriedposts = searchbytag(posts.edges, wptags)

  if (!queriedposts) {
    return null
  }

  return removenode(queriedposts)

}


export default QueryGetByTag