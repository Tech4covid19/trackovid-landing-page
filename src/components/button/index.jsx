import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

function Button({ children, href, type, className: otherClass }) {
  const data = useStaticQuery(query);

  if (href) {
    const isInternalLink = href.startsWith("/");
    let isSameDomain = false;
    if (!isInternalLink) {
      const siteLocation = new URL(data.site.siteMetadata.siteUrl);
      const linkLocation = new URL(href);
      isSameDomain = linkLocation.host.includes(siteLocation.host);
    }
    const className = classNames(
      styles.root,
      styles.link,
      styles[type],
      otherClass
    );

    return isInternalLink ? (
      <Link to={href} className={className}>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className={className}
        {...(!isSameDomain && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
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
  type: PropTypes.oneOf(["link", "outline", "cta", "textLink"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  href: null,
  type: "link",
  className: null,
};

export default Button;
