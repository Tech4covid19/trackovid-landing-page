import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import hamburguer from "@/assets/hamburguer.svg";
import closeMenu from "@/assets/close-menu.svg";

import styles from "./index.module.css";

export default function Menu({ hideLandingMobile }) {
  const className = classNames(styles.root, styles.menu, styles.hideDesktop, {
    [styles.hideLandingMobile]: hideLandingMobile,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button
      className={className}
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <img
        className={styles.hamburguer}
        src={menuOpen ? closeMenu : hamburguer}
        alt="Menu"
      />
    </button>
  );
}

Menu.propTypes = {
  hideLandingMobile: PropTypes.bool,
};

Menu.defaultProps = {
  hideLandingMobile: false,
};
