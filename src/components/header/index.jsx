import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import classNames from "classnames";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Sticky from "@/components/sticky";

import logo from "@/assets/logo.svg";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        appSiteUrl
      }
    }
  }
`;

const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return scrollY;
};

export default function Header({ onlyShowLogoWhenSticky }) {
  const data = useStaticQuery(query);
  const scrollY = useWindowScroll();
  const isSticky = scrollY >= 10;
  const className = classNames(styles.root, {
    [styles.sticky]: isSticky,
  });
  const hideLogo = onlyShowLogoWhenSticky && !isSticky;
  return (
    <Sticky>
      <header className={className}>
        <div className={styles.inner}>
          <Link
            to="/"
            className={classNames(styles.logo, styles.hideMobile, {
              [styles.hideLogo]: hideLogo,
            })}
          >
            <img src={logo} alt={data.site.siteMetadata.title} />
          </Link>
          <div className={styles.nav}>
            <Link to="/#para-que-serve" className={styles.link}>
              <Typography variant="smallCta" weight="bold">
                Para que serve?
              </Typography>
            </Link>
            <Link to="/#como-usar" className={styles.link}>
              <Typography variant="smallCta" weight="bold">
                Como usar?
              </Typography>
            </Link>
            <Link
              to="/perguntas-frequentes"
              className={classNames(styles.link, styles.hideMobile)}
            >
              <Typography variant="smallCta" weight="bold">
                Perguntas frequentes
              </Typography>
            </Link>
            <Button href={data.site.siteMetadata.appSiteUrl} type="outline">
              <Typography variant="smallCta" weight="bold" color="orange">
                Login
              </Typography>
            </Button>
          </div>
        </div>
      </header>
    </Sticky>
  );
}

Header.propTypes = {
  onlyShowLogoWhenSticky: PropTypes.bool,
};

Header.defaultProps = {
  onlyShowLogoWhenSticky: false,
};
