import React from "react";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@/components/button";

import saveLives from "@/assets/saving-lives.svg";
import reduceEconomicalImpact from "@/assets/reduce-the-economical-impact.svg";
import protectOurWayOfLiving from "@/assets/protect-our-way-of-living.svg";
import tech4covid19 from "@/assets/tech4covid19-logo.svg";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        appSiteUrl
        authorUrl
      }
    }
  }
`;

const QuemSomosHero = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography
            variant="h1"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            Quem somos
          </Typography>
          <Typography
            variant="smallBody"
            weight="medium"
            className={styles.text}
          >
            Somos um grupo voluntários que se associou ao movimento Tech4COVID19
            que à data inclui mais de 4000 voluntários, a contribuir para
            diversos projetos de cariz tecnológico para lutar contra o COVID-19.
            <br />
            <br />
            Queres juntar-te a nós nesta luta? Procuramos developers (
            <Button
              href="https://github.com/Tech4covid19/covidografia-onboarding"
              type="purpleLink"
            >
              vê aqui a nossa stack
            </Button>
            ), marketeers e qualquer outro perfil que nos possa ajudar a ajudar!
          </Typography>
          <div className={styles.conductCode}>
            <Typography
              variant="smallBody"
              weight="medium"
              className={styles.text}
            >
              Lê primeiro o nosso{" "}
              <Button href="/quem-somos/#" type="purpleLink">
                Código de Conduta
              </Button>
              .
            </Typography>
          </div>
          <div>
            <Typography
              variant="smallBody"
              weight="medium"
              color="lightBlack"
              className={styles.text}
            >
              Se achas que isto é para ti,{" "}
              <Button
                href="https://humaniaks.typeform.com/to/Yg5CS9"
                type="purpleLink"
              >
                regista-te aqui
              </Button>{" "}
              para poderes ter acesso ao nosso Slack, e procura-nos no canal
              #project_covidografia_public
            </Typography>
          </div>
          <div className={styles.mission}>
            <Typography
              variant="smallBody"
              color="purple"
              weight="bold"
              className={styles.text}
            >
              A nossa missão é reduzir o impacto da pandemia COVID-19,
              contribuindo para:
            </Typography>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.image}>
              <img src={saveLives} alt="Salvar vidas" />
            </div>
            <div className={styles.imageText}>
              <Typography weight="bold">Salvar vidas</Typography>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.image}>
              <img
                src={reduceEconomicalImpact}
                alt="Reduzir o impacto económico"
              />
            </div>
            <div className={styles.imageText}>
              <Typography weight="bold">
                Reduzir o <br /> impacto económico
              </Typography>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.image}>
              <img
                src={protectOurWayOfLiving}
                alt="Proteger o nosso modo de vida"
              />
            </div>
            <div className={styles.imageText}>
              <Typography weight="bold">
                Proteger o <br /> nosso modo de vida
              </Typography>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default QuemSomosHero;
