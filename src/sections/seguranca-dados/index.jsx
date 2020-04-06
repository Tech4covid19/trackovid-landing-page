import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@/components/typography";
import Button from "@/components/button";

import checkIcon from "@/assets/check.svg";
import segurancaIcon from "@/assets/seguranca.svg";

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

const SegurancaDados = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.left}`}>
            <div className={styles.header}>
              <Typography
                variant="h1"
                weight="bold"
                color="purple"
                className={styles.title}
              >
                Segurança nos seus dados
              </Typography>
              <Typography variant="body" weight="bold" className={styles.title}>
                O Covidografia recolhe informação sobre a sintomatologia dos
                portugueses em tempo real para ajudar as autoridades de saúde
              </Typography>
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={checkIcon} alt="check icon" />
              <Typography variant="smallBody" weight="bold">
                Lorem ipsum dolore sit amet
              </Typography>
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={checkIcon} alt="check icon" />
              <Typography variant="smallBody" weight="bold">
                Lorem ipsum dolore sit amet
              </Typography>
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={checkIcon} alt="check icon" />
              <Typography variant="smallBody" weight="bold">
                Lorem ipsum dolore sit amet
              </Typography>
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={checkIcon} alt="check icon" />
              <Typography variant="smallBody" weight="bold">
                Lorem ipsum dolore sit amet
              </Typography>
            </div>
            <div className={styles.row}>
              <img className={styles.icon} src={checkIcon} alt="check icon" />
              <Typography variant="smallBody" weight="bold">
                Lorem ipsum dolore sit amet
              </Typography>
            </div>
            <div>
              <Button
                href={`${data.site.siteMetadata.appSiteUrl}/#/privacy-policy`}
                type="ctaTransparent"
              >
                <Typography variant="largeCta" color="orange" weight="bold">
                  Ver Política de Privacidade
                </Typography>
              </Button>
            </div>
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <img
              className={styles.seguranca}
              src={segurancaIcon}
              alt="seguranca"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegurancaDados;
