const path = require("path");

module.exports = {
  pathPrefix: "/trackovid-landing-page",
  siteMetadata: {
    siteUrl: "https://covidografia.pt",
    title: "Covidografia",
    author: "Tech4Covid19",
    authorUrl: "https://tech4covid19.org",
    description:
      "A app que tira uma fotografia instantânea dos sintomas dos portugueses",
    keywords: "COVID-19, Coronavírus, app, fotografia, sintomas, portugueses",
    appSiteUrl: "https://app.covidografia.pt",
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5567HFR",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
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
