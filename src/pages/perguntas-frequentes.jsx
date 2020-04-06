import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import SimpleHero from "@/components/simple-hero";
import PerguntasFrequentes from "@/sections/perguntas-frequentes";

import "@/styles/main.module.css";

const FAQ = () => {
  return (
    <Layout>
      <SEO title="Perguntas frequentes" />
      <Header />
      <SimpleHero title="Perguntas frequentes" date="5 de abril de 2020" />
      <PerguntasFrequentes />
      <Footer />
    </Layout>
  );
};

export default FAQ;
