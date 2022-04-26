import React from "react";
import Head from "next/head";
import { Header, HomeContent } from "../common/containers";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ITMO News</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Header />

      <main className={`${styles.main} container`}>
        <HomeContent />
      </main>
    </>
  );
};

export default Home;
