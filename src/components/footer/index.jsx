import React from "react";
import heart from "@/assets/heart.svg";
import Typography from "@/components/typography";

import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Typography variant="smallBody" weight="medium" color="darkGray">
        Made with
      </Typography>
      <img className={styles.image} src={heart} alt="Heart" />
      <Typography variant="smallBody" weight="medium" color="darkGray">
        in Portugal
      </Typography>
    </div>
  );
}
