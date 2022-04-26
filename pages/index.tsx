import React, { useEffect, useState } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, HomeContent } from "../containers";
import styles from "../styles/Home.module.css";
import { Language, languages } from "../constants";
import { Dropdown, LangItem } from "../common/lib";
import { apiService, dataIntoNews } from "../common/utils";
import { useAppDispatch } from "../common/hooks";
import { setNews } from "../store/news";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apiService.get(
    `/news/list/?ver=2.0&per_page=9&lead=true`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      prefetchedData: data,
    },
  };
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ prefetchedData }) => {
    const dispatch = useAppDispatch();
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

    useEffect(() => {
      if (prefetchedData) dispatch(setNews(dataIntoNews(prefetchedData)));
    }, []);

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
