import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Sticky = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.sticky}>{children}</div>
    </div>
  );
};

Sticky.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sticky;
