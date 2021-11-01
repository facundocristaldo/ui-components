import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

interface IProgressBarProps {
  progress: number;
  faIcon: string;
}
export const ProgressBar: React.FC<IProgressBarProps> = ({
  progress,
  faIcon,
}) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  useEffect(() => {
    setProgressBarWidth(progress);
  }, [progress]);
  return (
    <div className={styles.container}>
      <div className={styles.achivement}>
        <div className={styles.bar}>
          <div className={styles.imgBox}>
            <i className={`fa ${faIcon}`}></i>
          </div>
          <div
            className={styles.progress}
            style={{ width: `${progressBarWidth}%` }}
          ></div>
          <p>
            <span
              className={styles.counter}
              style={{ color: progress > 25 ? "#fff" : "#000" }}
            >
              {progress}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
