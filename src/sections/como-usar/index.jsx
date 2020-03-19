import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@/components/typography";
import image from "@/assets/como-usar1.svg";
import image2 from "@/assets/como-usar2.svg";
import image3 from "@/assets/como-usar3.svg";
import Button from "@/components/button";

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
              <Typography color="gray" variant="mediumBody">
                Use a sua conta de Facebook para se registar. Mais opções de
                login em breve.
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <img src={image} alt="App login" />
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
              <Typography color="gray" variant="mediumBody">
                Responda a algumas questões sobre sintomas, isolamento, etc
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <img src={image2} alt="App status" />
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
              <Typography color="gray" variant="mediumBody">
                Acompanhe os dados da sua área de residência e mantenha-se
                seguro.
              </Typography>
            </div>

            <div className={styles.imageContainer}>
              <img src={image3} alt="App data" />
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
