import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import classNames from "classnames";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Sticky from "@/components/sticky";

import logo from "@/assets/logo.svg";
import hamburguer from "@/assets/hamburguer.svg";
import closeMenu from "@/assets/close-menu.svg";
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

export default function Header({ isLandingPage }) {
  const data = useStaticQuery(query);
  const scrollY = useWindowScroll();
  const isSticky = scrollY >= 10;
  const className = classNames(styles.root, {
    [styles.sticky]: isSticky,
    [styles.isLandingPage]: isLandingPage,
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const menuClasses = classNames(styles.root, styles.menu, styles.hideDesktop, {
    [styles.hideMobile]: isLandingPage,
  });

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <Sticky>
      <header className={className}>
        <div className={styles.inner}>
          <button className={menuClasses} type="button" onClick={toggleMenu}>
            <img
              className={styles.hamburguer}
              src={menuOpen ? closeMenu : hamburguer}
              alt="Menu"
            />
          </button>

          <Link
            to="/"
            className={classNames(styles.logo, {
              [styles.hideMobile]: isLandingPage,
              [styles.hideDesktop]: isLandingPage,
            })}
          >
            <img src={logo} alt={data.site.siteMetadata.title} />
          </Link>
          <div className={styles.nav}>
            <nav
              className={classNames(styles.nav, {
                [styles.hideMobile]: !isLandingPage,
              })}
            >
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
                to="/quem-somos/"
                className={classNames(styles.link, {
                  [styles.hideMobile]: isLandingPage,
                })}
              >
                <Typography variant="smallCta" weight="bold">
                  Quem somos
                </Typography>
              </Link>
              <Link
                to="/privacidade/"
                className={classNames(styles.link, {
                  [styles.hideMobile]: isLandingPage,
                })}
              >
                <Typography variant="smallCta" weight="bold">
                  Privacidade
                </Typography>
              </Link>
              <Link
                to="/perguntas-frequentes/"
                className={classNames(styles.link, {
                  [styles.hideMobile]: isLandingPage,
                })}
              >
                <Typography variant="smallCta" weight="bold">
                  Perguntas frequentes
                </Typography>
              </Link>
            </nav>
            <Button href={data.site.siteMetadata.appSiteUrl} type="outline">
              <Typography variant="smallCta" weight="bold" color="orange">
                Login
              </Typography>
            </Button>
          </div>
        </div>
      </header>
      <div
        className={classNames({
          [styles.overlay]: menuOpen,
        })}
      >
        <nav
          className={classNames(styles.navSecondary, styles.hideDesktop, {
            [styles.hideMobile]: isLandingPage,
            [styles.menuClosed]: !menuOpen,
          })}
        >
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
            to="/quem-somos/"
            className={classNames(styles.link, {
              [styles.hideMobile]: isLandingPage,
            })}
          >
            <Typography variant="smallCta" weight="bold">
              Quem somos
            </Typography>
          </Link>
          <Link
            to="/privacidade/"
            className={classNames(styles.link, {
              [styles.hideMobile]: isLandingPage,
            })}
          >
            <Typography variant="smallCta" weight="bold">
              Privacidade
            </Typography>
          </Link>
          <Link
            to="/perguntas-frequentes/"
            className={classNames(styles.link, {
              [styles.hideMobile]: isLandingPage,
            })}
          >
            <Typography variant="smallCta" weight="bold">
              Perguntas frequentes
            </Typography>
          </Link>
        </nav>
      </div>
    </Sticky>
  );
}

Header.propTypes = {
  isLandingPage: PropTypes.bool,
};

Header.defaultProps = {
  isLandingPage: false,
};
