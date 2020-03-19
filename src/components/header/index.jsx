import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import classNames from "classnames";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Sticky from "@/components/sticky";

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

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return scrollY;
};

export default function Header() {
  const data = useStaticQuery(query);
  const scrollY = useWindowScroll();
  const className = classNames(styles.root, {
    [styles.sticky]: scrollY >= 10,
  });
  return (
    <Sticky>
      <header className={className}>
        <div className={styles.inner}>
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
          <Button href={data.site.siteMetadata.appSiteUrl} type="outline">
            <Typography variant="smallCta" weight="bold" color="orange">
              Login
            </Typography>
          </Button>
        </div>
      </header>
    </Sticky>
  );
}
