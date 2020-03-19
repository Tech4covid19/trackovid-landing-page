const path = require("path");

module.exports = {
  pathPrefix: "/trackovid-landing-page",
  siteMetadata: {
    siteUrl: "https://example.com",
    title: "Trackovid",
    author: "Tech4covid19",
    description: "Landing page for Trackovid project",
    keywords: "gatsby, starter, eslint, postcss, analytics",
    appSiteUrl: "https://trackovid-app.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@": path.join(__dirname, "src"),
        },
        extensions: ["js", "jsx", "css", "scss"],
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
