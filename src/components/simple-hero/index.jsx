import React from "react";
import PropTypes from "prop-types";

import Typography from "@/components/typography";

import styles from "./index.module.css";

export default function SimpleHero({ title, date }) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <Typography
            variant="h1"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            {title}
          </Typography>
        </div>
        <div>
          <Typography
            variant="body"
            color="gray"
            weight="medium"
            className={styles.date}
          >
            Última actualização em {date}
          </Typography>
        </div>
      </div>
    </div>
  );
}

SimpleHero.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
