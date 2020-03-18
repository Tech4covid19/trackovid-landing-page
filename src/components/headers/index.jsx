import React from "react";
import Link from "gatsby-link";

import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.link}>
          Para que serve?
        </Link>
        <Link to="/" className={styles.link}>
          Como usar?
        </Link>
      </div>
    </header>
  );
}
