import React from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";

import styles from "./index.module.css";

const LandingQuemSomos = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <Typography
            variant="h3"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            Quem Somos?
          </Typography>
        </div>
        <div>
          <Typography variant="smallBody" weight="bold" className={styles.text}>
            O Covidografia recolhe informação sobre a sintomatologia dos
            portugueses em tempo real para ajudar as autoridades de saúde
          </Typography>
        </div>
        <div className={styles.cta}>
          <Button href="/quem-somos/#equipa" type="ctaTransparent">
            <Typography variant="largeCta" color="orange" weight="bold">
              Ver equipa
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingQuemSomos;
