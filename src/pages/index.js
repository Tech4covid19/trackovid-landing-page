import React from "react";

import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";
import Hero from "root/sections/Hero";

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home Page" />
      <Header />

      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default IndexPage;
