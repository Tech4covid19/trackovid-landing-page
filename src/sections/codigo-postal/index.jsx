import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Typography from "@/components/typography";
import Button from "@/components/button";

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

const CodigoPostal = ({ imageUrl }) => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography className={styles.title} variant="body" weight="bold">
            Covidografia
          </Typography>
          <Typography variant="smallBody">
            A Covidografia ajuda a avaliar com mais precisão a evolução da
            pandemia na sua área de residência
          </Typography>
        </div>
        <div>
          <img className={styles.image} src={imageUrl} alt="share" />
        </div>
        <div className={styles.footer}>
          <Button
            className={styles.shareButton}
            href={data.site.siteMetadata.siteUrl}
            type="share"
          >
            <Typography variant="share" weight="bold" color="white">
              Veja como está a sua zona
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

CodigoPostal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default CodigoPostal;
