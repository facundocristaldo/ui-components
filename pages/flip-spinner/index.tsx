import React from "react";
import { FlipSpinner, PageContentWrapper } from "components";
import styles from "./index.module.scss";

const FlipSpinnerPage = () => {
  return (
    <PageContentWrapper>
      <div className={styles.wrapper}>
        <FlipSpinner />
        <FlipSpinner />
        <FlipSpinner />
      </div>
    </PageContentWrapper>
  );
};

export default FlipSpinnerPage;
