import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import QuemSomosHero from "@/sections/quem-somos-hero";
import QuemSomosTeam from "@/sections/quem-somos-team";
import Footer from "@/components/footer";

import "@/styles/main.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <QuemSomosHero />
      <QuemSomosTeam />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
