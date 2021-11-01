import React from "react";
import styles from "./PageContentWrapper.module.scss";

export const PageContentWrapper: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
