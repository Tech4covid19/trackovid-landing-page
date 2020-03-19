import React from "react";
import { Link } from "gatsby";
import Typography from "@/components/typography";
import image from "@/assets/img-para-que-serve.svg";

import styles from "./index.module.css";

const ParaQueServe = () => {
  return (
    <div id="para-que-serve" className={styles.root}>
      <div>
        <Typography variant="h1" color="purple" weight="bold">
          Para que serve?
        </Typography>
      </div>
      <div className={styles.subtitle}>
        <Typography weight="bold">
          O Covidografia recolhe informação, em tempo real, sobre a
          sintomatologia dos portugueses para ajudar as autoridades de saúde
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            Este serviço permite aos cidadão portugueses indicarem, de forma
            regular, quais os seus sintomas, em particular aqueles que estão
            associados ao COVID-19. Esta informação será agregada e passada às
            autoridades competentes que poderão depois dispor de informação
            importante para tomarem as melhores decisões para o proteger e
            ajudar o país a recuperar do impacto desta pandemia.
          </Typography>
        </div>
        <div className={styles.column}>
          <Typography color="gray" variant="mediumBody" weight="medium">
            É ainda permitido aos utilizadores da aplicação acompanhar, em tempo
            real, o impacto da pandameia na zona onde se encontram, com base nas
            actualizações enviadas por todos os utilizadores. A privacidade dos
            dados recolhidos é tratada com o máximo cuidado. Leia os
            nossos&nbsp;
            <Link className={styles.link} to="/#termos-e-condicoes">
              Termos &amp; Condições
            </Link>
            .
          </Typography>
        </div>

        <img className={styles.image} src={image} alt="Para que serve" />
      </div>
    </div>
  );
};

export default ParaQueServe;
