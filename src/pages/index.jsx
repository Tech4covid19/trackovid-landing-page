import React from "react";

import SEO from "@/components/seo";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Hero from "@/sections/hero";
import Footer from "@/components/footer";
import ParaQueServe from "@/sections/para-que-serve";
import ComoUsar from "@/sections/como-usar";
import LandingQuemSomos from "@/sections/landing-quem-somos";
import PorqueOFazemos from "@/sections/porque-o-fazemos";

import "@/styles/main.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header onlyShowLogoWhenSticky />
      <Hero />
      <ParaQueServe />
      <ComoUsar />
      <PorqueOFazemos />
      <LandingQuemSomos />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
