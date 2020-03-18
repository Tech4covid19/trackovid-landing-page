import React from "react";
import Typography from "@/components/typography";

import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h2">
        Acompanhe o seu estado de saúde durante o surto de Covid19 e veja
        informação da sua área de residência.
      </Typography>
      <Typography color="gray" variant="h3">
        A sua ajuda é fundamental para as autoridades de saúde acompanharem o
        seu estado durante o surto de COVID-19. Veja a evolução da pandemia na
        sua área de residência.
      </Typography>
    </div>
  );
};

export default Hero;
