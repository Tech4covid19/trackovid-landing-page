import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Typography from "@/components/typography";

import removeIcon from "@/assets/remove.svg";
import addIcon from "@/assets/add.svg";

import styles from "./index.module.css";

export default function Collapse({ title, children, startOpen }) {
  const [isOpen, setIsOpen] = useState(startOpen);
  const [bodyHeight, setBodyHeight] = useState(0);
  const bodyRef = useRef(null);
  const style = {
    ...(bodyHeight && { height: `${isOpen ? bodyHeight : 0}px` }),
  };
  const className = classNames(styles.root, {
    [styles.isOpen]: isOpen,
  });

  useEffect(() => {
    if (bodyRef.current) {
      const rect = bodyRef.current.getBoundingClientRect();
      setBodyHeight(rect.height);
    }
  }, [bodyRef]);

  return (
    <div className={className}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.headerButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography
            variant="h2"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            {title}
          </Typography>
          <img
            className={styles.icon}
            src={isOpen ? removeIcon : addIcon}
            alt={isOpen ? "Fechar" : "Abrir"}
          />
        </button>
      </div>
      <div ref={bodyRef} className={styles.body} style={style}>
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  startOpen: PropTypes.bool,
};

Collapse.defaultProps = {
  startOpen: false,
};
