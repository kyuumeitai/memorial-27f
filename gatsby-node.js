const path = require(`path`)
const slash = require(`slash`)

const dasherize = str => {
  const map = {
    '-': ' ',
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  }

  let strlow = str.trim().toLowerCase()

  for (let pattern in map) {
    strlow = strlow.replace(new RegExp(map[pattern], 'g'), pattern)
  }
  return strlow
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(txt|csv)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
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
    query {
      allGoogleSheetTestimoniosRow  {
        nodes {
          apellidos
          nombres
          id
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allGoogleSheetTestimoniosRow } = result.data
  console.log('>>>query', allGoogleSheetTestimoniosRow)
  const victimTemplate = path.resolve(`./src/templates/victim.js`)

  allGoogleSheetTestimoniosRow.nodes.forEach(victim => {
    createPage({
      path: `/${dasherize(victim.nombres)}-${dasherize(victim.apellidos)}/`,
      component: slash(victimTemplate),
      context: {
        id: victim.id,
      }
    })
  })
}