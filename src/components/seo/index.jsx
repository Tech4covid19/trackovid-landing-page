import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PropTypes from "prop-types";
import Helmet from "react-helmet";

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
        keywords
      }
    }
  }
`;

function SEO({ title, description, keywords }) {
  const data = useStaticQuery(query);
  const {
    author,
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
  } = data.site.siteMetadata;

  const customTitle = title ? `${title} - ${siteTitle}` : "";

  return (
    <Helmet>
      <title>{customTitle || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || siteKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <meta name="language" content="pt-pt" />
      <meta name="author" content={author} />
      <meta property="og:title" content={customTitle || siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta
        property="og:image"
        content="https://covidografia-share-dashboard-production.s3-eu-west-1.amazonaws.com/share.png"
      />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
};

export default SEO;
