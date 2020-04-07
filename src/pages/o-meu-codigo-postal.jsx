import React from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import CodigoPostal from "@/sections/codigo-postal";

import Layout from "@/components/layout";

import "@/styles/main.module.css";

const getParamFromPathname = pathname => pathname.split("/").pop();

const checkIfImageExists = (imageUrl, bad) => {
  if (typeof window !== "undefined") {
    const img = new Image();
    img.onerror = bad;
    img.src = imageUrl;
  }
};

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
        keywords
        appImagesUrl
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const OMeuCodigoPostalPage = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);
  const {
    author,
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    appImagesUrl,
  } = data.site.siteMetadata;
  const imageId = getParamFromPathname(pathname);
  const imageUrl = `https://${appImagesUrl}/${imageId}.png`;
  checkIfImageExists(imageUrl, () => {
    navigate("/");
  });
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="language" content="pt-pt" />
        <meta name="author" content={author} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <CodigoPostal imageUrl={imageUrl} />
    </Layout>
  );
};

export default OMeuCodigoPostalPage;
