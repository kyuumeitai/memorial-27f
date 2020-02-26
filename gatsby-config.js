module.exports = {
  siteMetadata: {
    title: `27F`,
    description: `A 10 años del terremoto y tsunami que marcaron la pasada década en Chile.`,
    siteName: 'Interactivos La Tercera',
    author: `@latercera`,
    twitterHandle: `latercera`,
    url: 'https://interactivo.latercera.com/27f',
    shareimg: `src/images/share.jpg`,
    domain: `https://interactivo.latercera.com`,
    fbappid: `1134891773353659`,
    hashtags: [`#27F`]
  },
  pathPrefix: `/27f`,
  plugins: [
    {
      resolve: `@labcon/gatsby-plugin-copesa-remote-images`,
      options: {
        nodeType: 'wordpress__POST',
        categoryid: 81,
        extractImageFromPathString: 'content',
        loopPathArray: ['attached_contentimages', 'attached_images_in_acf', 'attached_mainimg', 'attached_audios', 'attached_subtitles_in_acf'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-80728886-38`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '736034173495383',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `800`]
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `La Tercera`,
        short_name: `latercera`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon-lt.png`
      },
    },
    {
    resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'legacy.ltnext.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: true,
        perPage: 100,
        concurrentRequests: 20,
        includedRoutes: ['**/posts', '**/tags'],
        normalizer: function ({ entities }) {
          return entities.filter(e => {
            if (e.__type === `wordpress__POST`) {
              if (e.categories.includes(81) ){  //sólo permite posts de la categoría actual
                return e
              }
            }
            else {
              return e
            }
          })
        }
      }
    },
    `gatsby-plugin-no-sourcemaps`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}