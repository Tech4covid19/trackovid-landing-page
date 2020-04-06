import React from "react";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@/components/button";

import tech4covid19 from "@/assets/tech4covid19-logo.svg";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        authorUrl
      }
    }
  }
`;

const AboutMovement = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.author}>
          <a
            href={data.site.siteMetadata.authorUrl}
            className={styles.authorLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.tech4covid19}
              src={tech4covid19}
              alt={data.site.siteMetadata.author}
              title={data.site.siteMetadata.author}
            />
          </a>
        </div>
        <div>
          <Typography
            variant="h2"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            Sobre o movimento tech4COVID19
          </Typography>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/Dv5gaU5NaAA?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              width="100%"
              height="100%"
              title="Sobre o movimento tech4COVID19"
            />
          </div>
        </div>

        <div className={styles.movementTextWrapper}>
          <Typography
            variant="smallBody"
            weight="bold"
            className={styles.movementText}
          >
            Este movimento foi criado por um grupo de fundadores da comunidade
            tecnológica portuguesa para combater o COVID-19.
            <br />
            <br />
            Nasceu espontaneamente no dia 14 de Março, juntando-se aos
            fundadores centenas de voluntários. Passado 48h já tinha 600
            voluntários e 120 empresas envolvidas. Ao fim de uma semana (20
            Março) tinha já 3000 voluntários de todas as áreas (gestão,
            marketing, design, informática, producto, etc).
            <br />
            <br />
            Tudo a trabalhar voluntariamente e com uma energia incrível em
            soluções tecnológicas que ajudem a população a ultrapassar o desafio
            do COVID-19.
          </Typography>
        </div>

        <div className={styles.knowMore}>
          <Button href={data.site.siteMetadata.authorUrl} type="ctaTransparent">
            <Typography variant="largeCta" color="orange" weight="bold">
              Saber mais sobre #tech4COVID19
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMovement;
