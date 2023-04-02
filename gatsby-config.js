/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Greg Miller's Portfolio`,
    siteUrl: `https://gregmiller.app`,
  },
  plugins: [
    "gatsby-plugin-jss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.jpg",
      },
    },
  ],
};
