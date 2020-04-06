import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import SimpleHero from "@/components/simple-hero";
import CodigoConduta from "@/sections/codigo-conduta/index";
import Footer from "@/components/footer";

import "@/styles/main.module.css";

const CodigoCondutaPage = () => {
  return (
    <Layout>
      <SEO title="Código de Conduta" />
      <Header />
      <SimpleHero title="Código de Conduta" date="5 de abril de 2020" />
      <CodigoConduta />
      <Footer />
    </Layout>
  );
};

export default CodigoCondutaPage;
