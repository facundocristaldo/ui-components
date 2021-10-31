import React from "react";
import { FlipSpinner, PageContentWrapper } from "components";
import styles from "./index.module.scss";
import { NextPage } from "next";

const FlipSpinnerPage: NextPage = () => {
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
