import React, { useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import hamburguer from "@/assets/hamburguer.svg";
import closeMenu from "@/assets/close-menu.svg";

import styles from "./index.module.css";

export default function Menu({ showMenu }) {
  const className = classNames(styles.root, styles.menu, styles.hideDesktop, {
    [styles.hideMenu]: !showMenu,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button
      className={className}
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <img src={menuOpen ? closeMenu : hamburguer} alt="Menu" />
    </button>
  );
}

Menu.propTypes = {
  showMenu: PropTypes.bool,
};

Menu.defaultProps = {
  showMenu: false,
};
