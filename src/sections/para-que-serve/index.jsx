import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@/components/typography";
import image from "@/assets/img-para-que-serve.svg";

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
          A Covidografia reúne informação, em tempo real, sobre os sintomas dos
          portugueses para melhor se avaliar a propagação da pandemia
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            Esta recolha permite aos utilizadores da plataforma{" "}
            <strong>
              acompanhar, em tempo real, os sintomas de outros utilizadores na
              mesma área geográfica
            </strong>
            , com base em atualizações feitas pelos próprios.
            <br />
            <br />
            Os utilizadores devem indicar, de forma regular, quais os seus
            sintomas, em particular aqueles que estão associados ao COVID-19.
          </Typography>
        </div>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            Respeitando sempre a privacidade dos utilizadores, esta informação
            será agregada e partilhada com as autoridades de saúde, que poderão
            depois utilizar esta informação para tomarem decisões que ajudem a
            proteger os cidadãos desta pandemia.
            <br />
            <br />A privacidade dos dados recolhidos é tratada com o máximo
            cuidado. Leia os nossos{" "}
            <a
              className={styles.link}
              href={`${data.site.siteMetadata.appSiteUrl}/#/terms-conditions`}
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
