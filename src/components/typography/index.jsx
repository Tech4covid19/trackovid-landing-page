import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Typography = ({
  children,
  variant,
  weight,
  color,
  className: otherClass,
}) => {
  const className = classNames(
    styles[variant],
    styles[color],
    styles[weight],
    otherClass
  );

  const TextComponent = ["h1", "h2", "h3", "ul"].includes(variant)
    ? variant
    : "p";

  return <TextComponent className={className}>{children}</TextComponent>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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
    "ul",
  ]),
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  color: PropTypes.oneOf([
    "white",
    "black",
    "gray",
    "darkGray",
    "purple",
    "orange",
    "lightBlack",
  ]),
};

Typography.defaultProps = {
  variant: "body",
  className: null,
  weight: "regular",
  color: "black",
};

export default Typography;
