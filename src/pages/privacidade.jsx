import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import SimpleHero from "@/components/simple-hero";
import Privacidade from "@/sections/privacidade/index";
import Footer from "@/components/footer";

import "@/styles/main.module.css";

const PrivacidadePage = () => {
  return (
    <Layout>
      <SEO title="Privacidade" />
      <Header />
      <SimpleHero title="Privacidade dos seus dados" />
      <Privacidade />
      <Footer color="gray" />
    </Layout>
  );
};

export default PrivacidadePage;
