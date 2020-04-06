import React from "react";
import PropTypes from "prop-types";

import Typography from "@/components/typography";

import styles from "./index.module.css";

export default function SectionContent({ title, children }) {
  return (
    <div className={styles.container}>
      <Typography
        variant="h3"
        weight="bold"
        color="purple"
        className={styles.title}
      >
        {title}
      </Typography>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

SectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
