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
        appSiteUrl
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
          <Typography variant="body" weight="bold">
            Partilhar estado da minha área
          </Typography>
          <Typography variant="smallBody">
            Partilhar estado da minha área
          </Typography>
        </div>
        <div>
          <img className={styles.image} src={imageUrl} alt="share" />
        </div>
        <div className={styles.footer}>
          <Button
            className={styles.shareButton}
            href={data.site.siteMetadata.appSiteUrl}
            type="share"
          >
            <Typography variant="share" weight="bold" color="white">
              Login
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
