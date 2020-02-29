module.exports = {
  siteMetadata: {
    title: `Asterisker`,
    description: `Convert your text to asterisks. Useful for tweeting, according to some people. I don't know.`,
    author: `@ManoelTLobo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `asterisker`,
        short_name: `asterisker`,
        start_url: `/`,
        background_color: `#050`,
        theme_color: `#050`,
        display: `minimal-ui`,
        icon: `src/images/asterisker.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
