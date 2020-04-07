import React from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";

import styles from "./index.module.css";

const HeroLinks = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Button href="/quem-somos/" type="link">
          <Typography variant="smallCta" weight="bold" color="orange">
            Quem Somos
          </Typography>
        </Button>
        <Button href="/privacidade/" type="link" className={styles.privacidade}>
          <Typography variant="smallCta" weight="bold" color="orange">
            Privacidade
          </Typography>
        </Button>
        <Button href="/perguntas-frequentes/" type="link">
          <Typography variant="smallCta" weight="bold" color="orange">
            Perguntas Frequentes
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default HeroLinks;
