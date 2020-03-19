import React from "react";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@/components/button";

import Logo from "@/components/logo/index";
import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        appSiteUrl
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <Logo />
      <Typography variant="h2">
        Acompanhe o seu estado de saúde durante o surto de Covid19 e veja
        informação da sua área de residência.
      </Typography>
      <Typography color="gray" variant="h3">
        A sua ajuda é fundamental para as autoridades de saúde acompanharem o
        seu estado durante o surto de COVID-19. Veja a evolução da pandemia na
        sua área de residência.
      </Typography>
      <Button href={data.site.siteMetadata.appSiteUrl} type="cta">
        <Typography variant="largeCta" color="white" weight="bold">
          Começar a usar
        </Typography>
      </Button>
      <br />
      <Button href="/#saber-mais">
        <Typography variant="smallBody" color="orange">
          Saber mais
        </Typography>
      </Button>
    </div>
  );
};

export default Hero;
