import { ICardProps } from "interfaces";
import React from "react";
import styles from "./Card.module.scss";

export const Card: React.FC<ICardProps> = ({
  isLink,
  link,
  className,
  title,
  subtitle,
}) => {
  const Wrapper = (children: React.ReactElement) =>
    isLink ? (
      <a href={link} className={styles.card}>
        {children}
      </a>
    ) : (
      <div className={styles.card}>{children}</div>
    );
  return Wrapper(
    <>
      <h2>{title} &rarr;</h2>
      <p>{subtitle}</p>
    </>
  );
};
