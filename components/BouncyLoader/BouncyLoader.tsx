import React from "react";
import styles from "./BouncyLoader.module.scss";

export const BouncyLoader: React.FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div></div>
      <div className={styles.inner}></div>
    </div>
  );
};
