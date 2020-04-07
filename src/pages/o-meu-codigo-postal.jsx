import React from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";
import http from "http";
import Helmet from "react-helmet";

import CodigoPostal from "@/sections/codigo-postal";

import Layout from "@/components/layout";

import "@/styles/main.module.css";

const getParamFromPathname = pathname => pathname.split("/").pop();

function checkIfImageExists(host, path) {
  const options = {
    method: "HEAD",
    host,
    path: `/${path}.png`,
  };
  const req = http.request(options, r => {
    if (r.statusCode !== 200) {
      navigate("/");
    }
  });
  req.end();
}

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
  checkIfImageExists(appImagesUrl, imageId);
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
