import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PropTypes from "prop-types";
import Helmet from "react-helmet";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        logo
        ogImage
      }
    }
  }
`;

function SEO({ title, description, keywords }) {
  const data = useStaticQuery(query);
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    logo,
    ogImage,
  } = data.site.siteMetadata;

  return (
    <Helmet>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || siteKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href={logo} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={ogImage} />
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
