import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import heart from "@/assets/heart.svg";
import tech4covid19 from "@/assets/tech4covid19-logo.svg";
import email from "@/assets/email.svg";
import Typography from "@/components/typography";
import classNames from "classnames";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        authorUrl
      }
    }
  }
`;

function Footer({ color }) {
  const className = classNames(styles.footer, [styles[color]]);
  const data = useStaticQuery(query);
  return (
    <div className={className}>
      <div className={styles.row}>
        <img className={styles.email} src={email} alt="email" />
        <a href="mailto:info@covidografia.pt" className={styles.emailLink}>
          <Typography variant="smallBody" weight="medium" color="darkGray">
            info@covidografia.pt
          </Typography>
        </a>
      </div>
      <div className={styles.copyright}>
        <div className={styles.row}>
          <Typography variant="smallCta" color="darkGray">
            Made with
          </Typography>
          <img className={styles.heart} src={heart} alt="Heart" />
          <Typography variant="smallCta" color="darkGray">
            in Portugal.
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography variant="smallCta" color="darkGray">
            Born in the
          </Typography>
          <a
            href={data.site.siteMetadata.authorUrl}
            className={styles.authorLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.tech4covid19}
              src={tech4covid19}
              alt={data.site.siteMetadata.author}
              title={data.site.siteMetadata.author}
            />
          </a>
          <Typography variant="smallCta" color="darkGray">
            community
          </Typography>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  color: PropTypes.oneOf(["gray", "white"]),
};

Footer.defaultProps = {
  color: "white",
};

export default Footer;
