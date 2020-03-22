import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@/components/typography";
import image from "@/assets/img-para-que-serve.svg";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const ParaQueServe = () => {
  const data = useStaticQuery(query);
  return (
    <div id="para-que-serve" className={styles.root}>
      <div>
        <Typography variant="h1" color="purple" weight="bold">
          Para que serve?
        </Typography>
      </div>
      <div className={styles.subtitle}>
        <Typography weight="bold">
          O Covidografia recolhe informação, em tempo real, sobre os sintomas
          dos portugueses para ajudar as autoridades de saúde
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            Este serviço permite aos utilizadores da aplicação{" "}
            <strong>
              acompanhar, em tempo real, o impacto da pandemia na zona onde se
              encontram
            </strong>
            , com base nas actualizações enviadas por todos os utilizadores.
            <br />
            <br />É ainda permitido aos cidadãos indicarem, de forma regular,
            quais os seus sintomas, em particular aqueles que estão associados
            ao COVID-19.
          </Typography>
        </div>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            Esta informação será agregada e partilhada com as autoridades
            competentes que poderão depois dispor de informação importante para
            tomarem as melhores decisões para o proteger e ajudar o país a
            recuperar do impacto desta pandemia.
            <br />
            <br />A privacidade dos dados recolhidos é tratada com o máximo
            cuidado. Leia os nossos{" "}
            <a
              className={styles.link}
              href={`${data.site.siteMetadata.siteUrl}/terms-conditions`}
            >
              Termos &amp; Condições
            </a>
            .
          </Typography>
        </div>

        <img className={styles.image} src={image} alt="Para que serve" />
      </div>
    </div>
  );
};

export default ParaQueServe;
