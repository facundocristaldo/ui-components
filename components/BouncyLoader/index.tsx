import React from "react";
import styles from "./index.module.scss";

export const BouncyLoader: React.FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div></div>
      <div className={styles.inner}></div>
    </div>
  );
};
