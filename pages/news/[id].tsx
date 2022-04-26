import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { Header } from "../../common/containers";
import { languages } from "../../constants";
import { useRouter } from "next/router";
import { useAppSelector } from "../../common/hooks";
import { RootState } from "../../store";
import { NewsItem } from "../../store/news/types";

const News: React.FC = () => {
  const router = useRouter();
  const descRef = useRef<HTMLDivElement>(null);
  const { id } = router.query;
  const { title, description } = useAppSelector(({ news }: RootState) => {
    const newsItem = news.news.find((obj: NewsItem) => obj.id === Number(id));
    if (newsItem) return newsItem;
    // При возможности отправлялся бы запрос по id определённой новости
    throw new Error("Ошибка в получении данных");
  });

  useEffect(() => {
    if (descRef.current) descRef.current.innerHTML = description;
  }, []);

  return (
    <>
      <Head>
        <title>ITMO News</title>
      </Head>

      <Header lang={languages.ru} />

      <main className={"container"}>
        <h1>{title}</h1>
        <div ref={descRef} />
      </main>
    </>
  );
};

export default News;
