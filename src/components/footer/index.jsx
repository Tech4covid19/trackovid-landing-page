import React from "react";

import styles from "./index.module.css";
import heart from "../../assets/heart.svg";

export default function Header() {
  return (
    <div className={styles.footer}>
      <span>Made with</span>
      <img className={styles.image} src={heart} alt="heart" />
      <span>in Portugal</span>
    </div>
  );
}
