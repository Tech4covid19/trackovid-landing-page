import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Typography from "@/components/typography";
import Button from "@/components/button";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        appSiteUrl
      }
    }
    imageOne: file(relativePath: { eq: "como-usar1.png" }) {
      ...ComoUsarImageData
    }
    imageTwo: file(relativePath: { eq: "como-usar2.png" }) {
      ...ComoUsarImageData
    }
    imageThree: file(relativePath: { eq: "como-usar3.png" }) {
      ...ComoUsarImageData
    }
  }
  fragment ComoUsarImageData on File {
    childImageSharp {
      fixed(width: 326, quality: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

const ComoUsar = () => {
  const data = useStaticQuery(query);
  return (
    <div id="como-usar" className={styles.root}>
      <div className={styles.container}>
        <div>
          <Typography variant="h1" color="purple" weight="bold">
            Como usar?
          </Typography>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.number}>
              <Typography variant="number" color="white">
                1
              </Typography>
            </div>
            <Typography weight="bold">Registe-se na plataforma</Typography>
            <div className={styles.columnSubTitle}>
              <Typography color="gray" variant="mediumBody" weight="medium">
                Use a sua conta de Facebook para se registar. Mais opções de
                login em breve.
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <Img
                className={styles.image}
                fixed={data.imageOne.childImageSharp.fixed}
                alt="Registe-se na plataforma"
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.number}>
              <Typography variant="number" color="white">
                2
              </Typography>
            </div>
            <Typography weight="bold">
              Atualize o seu estado de saúde
            </Typography>
            <div className={styles.columnSubTitle}>
              <Typography color="gray" variant="mediumBody" weight="medium">
                Responda a algumas questões sobre sintomas, isolamento, etc.
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <Img
                className={styles.image}
                fixed={data.imageTwo.childImageSharp.fixed}
                alt="Atualize o seu estado de saúde"
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.number}>
              <Typography variant="number" color="white">
                3
              </Typography>
            </div>
            <Typography weight="bold">Veja os dados da sua área</Typography>
            <div className={styles.columnSubTitle}>
              <Typography color="gray" variant="mediumBody" weight="medium">
                Acompanhe os dados da sua área de residência e mantenha-se
                seguro.
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <Img
                className={styles.image}
                fixed={data.imageThree.childImageSharp.fixed}
                alt="Veja os dados da sua área"
              />
            </div>
          </div>
        </div>
        <Button href={data.site.siteMetadata.appSiteUrl} type="cta">
          <Typography variant="largeCta" color="white" weight="bold">
            Começa a usar
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ComoUsar;
