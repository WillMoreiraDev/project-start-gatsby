module.exports = {
  siteMetadata: {
    title: `Name project`,
    description: `Description project`,
    author: `Will Moreira`,
    siteUrl: `https://willmoreira.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options : {
        displayName : process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#667ACC`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",        
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `prompt\:300,400,500,600,700,800,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://willmoreira.com.br`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Name project`,
        short_name: `Name project`,
        start_url: `/`,
        background_color: `#272B33`,
        theme_color: `#667ACC`,
        display: `standalone`,
        icon: `src/assets/icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
