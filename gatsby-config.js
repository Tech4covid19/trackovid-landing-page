const path = require("path");

module.exports = {
  pathPrefix: "/trackovid-landing-page",
  siteMetadata: {
    siteUrl: "https://covidografia.pt",
    title: "Covidografia",
    author: "Tech4covid19",
    authorUrl: "https://tech4covid19.org",
    description:
      "A app que tira uma fotografia instantânea dos sintomas dos portugueses",
    keywords: "COVID-19, Coronavírus, app, fotografia, sintomas, portugueses",
    appSiteUrl: "https://covidografia.pt/app",
    logo: "/images/logo.png",
    ogImage: "/images/covidografia-share.png",
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
