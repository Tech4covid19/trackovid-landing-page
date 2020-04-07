import React from "react";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@/components/button";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        authorUrl
      }
    }
  }
`;

const FaqQuemSomos = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <Typography
            variant="h3"
            weight="bold"
            color="purple"
            className={styles.title}
          >
            Quem Somos?
          </Typography>
        </div>
        <div>
          <Typography variant="smallBody" weight="bold" className={styles.text}>
            Somos um grupo voluntários que se associou ao movimento{" "}
            <Button href={data.site.siteMetadata.authorUrl} type="textLink">
              Tech4Covid19
            </Button>{" "}
            que à data inclui mais de 4000 voluntários, a contribuir para
            diversos projetos de cariz tecnológico para lutar contra o
            COVID&#8209;19.
          </Typography>
        </div>
        <div className={styles.cta}>
          <Button href="/quem-somos/" type="ctaTransparent">
            <Typography variant="largeCta" color="orange" weight="bold">
              Ver equipa
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqQuemSomos;
