import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Typography = ({ children, variant, weight, color }) => {
  const className = classNames(styles[variant], styles[color], styles[weight]);

  const TextComponent = ["h1", "h2", "h3"].includes(variant) ? variant : "p";

  return <TextComponent className={className}>{children}</TextComponent>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "body",
    "mediumBody",
    "smallBody",
    "smallCta",
    "largeCta",
    "number",
  ]),
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  color: PropTypes.oneOf([
    "white",
    "black",
    "gray",
    "darkGray",
    "purple",
    "orange",
  ]),
};

Typography.defaultProps = {
  variant: "body",
  weight: "regular",
  color: "black",
};

export default Typography;
