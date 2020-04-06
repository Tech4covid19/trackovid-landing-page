import React from "react";
import classNames from "classnames";
import Typography from "@/components/typography";

import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";

import styles from "./index.module.css";

const FollowProject = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h2" weight="bold" color="purple">
            Segue o projeto Covidografia
          </Typography>
        </div>

        <div className={styles.socialNetworks}>
          <div>
            <a
              href="#facebook"
              className={styles.socialNetwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={classNames(
                  styles.socialNetworkImage,
                  styles.facebook
                )}
              >
                <img src={facebook} alt="Facebook" title="Facebook" />
              </div>
              <Typography
                variant="smallBody"
                weight="medium"
                className={styles.socialNetworkText}
              >
                Facebook
              </Typography>
            </a>
          </div>
          <div>
            <a
              href="#twitter"
              className={styles.socialNetwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={classNames(
                  styles.socialNetworkImage,
                  styles.twitter
                )}
              >
                <img src={twitter} alt="Twitter" title="Twitter" />
              </div>
              <Typography
                variant="smallBody"
                weight="medium"
                className={styles.socialNetworkText}
              >
                Twitter
              </Typography>
            </a>
          </div>
          <div>
            <a
              href="#instagram"
              className={styles.socialNetwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={classNames(
                  styles.socialNetworkImage,
                  styles.instagram
                )}
              >
                <img src={instagram} alt="Instagram" title="Instagram" />
              </div>
              <Typography
                variant="smallBody"
                weight="medium"
                className={styles.socialNetworkText}
              >
                Instagram
              </Typography>
            </a>
          </div>
          <div>
            <a
              href="#linkedin"
              className={styles.socialNetwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={classNames(
                  styles.socialNetworkImage,
                  styles.linkedin
                )}
              >
                <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
              </div>
              <Typography
                variant="smallBody"
                weight="medium"
                className={styles.socialNetworkText}
              >
                LinkedIn
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowProject;
