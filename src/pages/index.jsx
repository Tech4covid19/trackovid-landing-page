import React from "react";

import SEO from "@/components/seos";
import Header from "@/components/headers";
import Layout from "@/components/layouts";
import Hero from "@/sections/heros";

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
