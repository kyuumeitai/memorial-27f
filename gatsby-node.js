const path = require(`path`)
const slash = require(`slash`)

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, "src"),
      }
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query  {
      allWordpressPost{
        edges {
          node {
            id
            slug
            title
            excerpt
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPost } = result.data

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })
}