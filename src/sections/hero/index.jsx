import React from "react";
import Img from "gatsby-image";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@/components/button";

import logo from "@/assets/logo.svg";
import arrow from "@/assets/arrow.svg";
import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        appSiteUrl
      }
    }
    file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 532, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img
            src={logo}
            alt={data.site.siteMetadata.title}
            className={styles.logo}
          />
          <Typography variant="h2" weight="bold" className={styles.typography}>
            {data.site.siteMetadata.description}
          </Typography>
          <Typography
            color="gray"
            variant="h3"
            weight="medium"
            className={styles.typography}
          >
            A sua ajuda é fundamental para as autoridades de saúde acompanharem
            o seu estado durante o surto de COVID-19. Veja a evolução da
            pandemia na sua área de residência.
          </Typography>
          <Button
            href={data.site.siteMetadata.appSiteUrl}
            type="cta"
            className={styles.typography}
          >
            <Typography variant="largeCta" color="white" weight="bold">
              Começar a usar
            </Typography>
          </Button>
          <div className={styles.info}>
            <Typography variant="smallBody">
              <strong>#tech4covid</strong> Um projeto de voluntários, sem fins
              lucrativos.
            </Typography>
            <Button href="/#saber-mais">
              <Typography
                variant="smallBody"
                color="orange"
                className={styles.more}
              >
                Saber mais <img src={arrow} alt="arrow" />
              </Typography>
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnBody}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={styles.imageWrapper}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
