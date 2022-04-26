import React, { useState } from "react";
import Head from "next/head";
import { Header, HomeContent } from "../common/containers";
import styles from "../styles/Home.module.css";
import { Language, languages } from "../constants";

const Home: React.FC = () => {
  const [lang, setLang] = useState<Language>(languages.ru);
  return (
    <>
      <Head>
        <title>ITMO News</title>
      </Head>

      <Header lang={lang} setLang={setLang} />

      <main className={`${styles.main} container`}>
        <HomeContent langId={lang.id} />
      </main>
    </>
  );
};

export default Home;
