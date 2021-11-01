import { PageContentWrapper } from "components";
import { ProgressBar } from "components/ProgressBar/ProgressBar";
import { NextPage } from "next";
import React, { useState } from "react";
import styles from "./ProgressBarPage.module.scss";

const ProgressBarPage: NextPage = () => {
  const [progress, setProgress] = useState(50);
  const setProgressValidate = (newVal: number) =>
    0 <= newVal && newVal <= 100 ? true : false;
  return (
    <PageContentWrapper>
      <ProgressBar progress={progress} faIcon={"fa-desktop"} />
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => {
            if (setProgressValidate(progress - 1)) {
              setProgress((p) => p - 1);
            }
          }}
        >
          <i className="fa fa-angle-down"></i>
        </button>
        <button
          onClick={() => {
            if (setProgressValidate(progress + 1)) {
              setProgress((p) => p + 1);
            }
          }}
        >
          <i className="fa fa-angle-up"></i>
        </button>
      </div>
    </PageContentWrapper>
  );
};

export default ProgressBarPage;
