import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import classNames from "classnames";

import styles from "./index.module.css";

function Button({ children, href, type }) {
  if (href) {
    const isInternalLink = href.startsWith("/");
    const className = classNames(styles.root, styles.link, styles[type]);

    return isInternalLink ? (
      <Link to={href} className={className}>
        {children}
      </Link>
    ) : (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  const className = classNames(styles.root, styles[type]);
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(["link", "outline", "cta"]),
};

Button.defaultProps = {
  href: null,
  type: "link",
};

export default Button;
