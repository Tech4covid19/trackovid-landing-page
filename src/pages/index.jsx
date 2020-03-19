import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Hero from "@/sections/hero";
import Footer from "@/components/footer";
import ParaQueServe from "@/sections/para-que-serve";

import "@/styles/main.module.css";

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home Page" />
      <Header />

      <Layout>
        <Hero />
        <ParaQueServe />
      </Layout>

      <Footer />
    </div>
  );
};

export default IndexPage;
