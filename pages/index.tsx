import React from "react";
import Head from "next/head";
import { Header } from "../common/containers";
import styles from "../styles/Home.module.css";
import { Card } from "../common/lib";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ITMO News</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Header />

      <main className={`${styles.main} container`}>
        <h1>Новости и события</h1>
        <div className={styles.cardsContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
