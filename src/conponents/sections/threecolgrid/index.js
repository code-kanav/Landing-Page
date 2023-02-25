import VerticalCard from "../../cards/vertical";
import styles from "./threeColGrid.module.scss";
// import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";

import { useState } from "react";
export default function ThreeColGrid({ data }) {
  return (
    <div className={styles.threecolGrid}>
      <div className={styles.gridTitle}>
        <h3 className="container">
             What's New?
        </h3>
      </div>
      <div className={styles.gridWrapper}>
          {data.slice(0,9).map((res, i) => {
              return <VerticalCard key={i} data={res} />;
            })
            }
      </div>
    </div>
  );
}
