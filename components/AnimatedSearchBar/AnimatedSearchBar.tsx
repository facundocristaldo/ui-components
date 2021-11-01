import React from "react";
import styles from "./AnimatedSearchBar.module.scss";
import Head from "next/head";

export const AnimatedSearchBar: React.FC = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className={styles.searchBox}>
        <button className={styles.btnSearch}>
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className={styles.inputSearch}
          placeholder="Type to Search..."
        />
      </div>
    </>
  );
};
