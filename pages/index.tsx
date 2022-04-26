import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Header, HomeContent } from "../containers";
import styles from "../styles/Home.module.css";
import { Language, languages } from "../constants";
import { Dropdown, LangItem } from "../common/lib";

const Home: React.FC = () => {
  const [lang, setLang] = useState<Language>(languages.ru);
  const languagesList = Object.values(languages).map((obj) => ({
    id: obj.id,
    item: (
      <LangItem
        src={obj.src}
        label={obj.label}
        key={obj.id}
        onClick={() => setLang(obj)}
      />
    ),
  }));

  return (
    <>
      <Head>
        <title>ITMO News</title>
      </Head>

      <Header>
        <Image src={"/itmo.svg"} width={162} height={16} layout={"fixed"} />
        <Dropdown
          selected={{
            id: lang.id,
            item: <LangItem src={lang.src} label={lang.label} />,
          }}
          list={languagesList}
        />
      </Header>

      <main className={`${styles.main} container`}>
        <HomeContent langId={lang.id} />
      </main>
    </>
  );
};

export default Home;
