import React from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";

import saveLives from "@/assets/saving-lives.svg";
import reduceEconomicalImpact from "@/assets/reduce-the-economical-impact.svg";
import protectOurWayOfLiving from "@/assets/protect-our-way-of-living.svg";

import styles from "./index.module.css";

const PorqueOFazemos = () => {
  return (
    <div id="porque-o-fazemos" className={styles.root}>
      <div className={styles.container}>
        <div>
          <Typography variant="h1" color="purple" weight="bold">
            Porque o fazemos?
          </Typography>
        </div>
        <div className={styles.subtitle}>
          <Typography weight="bold">
            A nossa missão é reduzir o impacto da pandemia COVID-19,
            contribuindo para:
          </Typography>
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
        <Button href="#" type="ctaTransparent">
          <Typography variant="largeCta" color="orange" weight="bold">
            Perguntas Frequentes
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default PorqueOFazemos;
