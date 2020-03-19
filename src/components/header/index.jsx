import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import Button from "@/components/button";
import Typography from "@/components/typography";

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

export default function Header() {
  const data = useStaticQuery(query);
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.link}>
          Para que serve?
        </Link>
        <Link to="/" className={styles.link}>
          Como usar?
        </Link>
        <Button href={data.site.siteMetadata.appSiteUrl} type="outline">
          <Typography variant="smallCta" weight="bold" color="orange">
            Login
          </Typography>
        </Button>
      </div>
    </header>
  );
}
