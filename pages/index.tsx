import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card, FlipSpinner } from "components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          UI Example <span>Codes!</span>
        </h1>

        <p className={styles.description}>
          To get you going as fast as possible...
        </p>

        <div className={styles.grid}>
          <Card
            isLink
            link={"/flip-spinner"}
            className={styles.card}
            title={"Flip Spinner"}
            subtitle="Animated card flipping around"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
