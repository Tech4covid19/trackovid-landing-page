import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Hero from "@/sections/hero";

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
