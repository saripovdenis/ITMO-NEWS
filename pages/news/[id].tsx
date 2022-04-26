import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { Header } from "../../containers";
import { useRouter } from "next/router";
import { useAppSelector } from "../../common/hooks";
import { RootState } from "../../store";
import { NewsItem } from "../../store/news/types";
import Image from "next/image";

const News: React.FC = () => {
  const router = useRouter();
  const descRef = useRef<HTMLDivElement>(null);
  const { id } = router.query;
  const { title, description } = useAppSelector(({ news }: RootState) => {
    const newsItem = news.news.find((obj: NewsItem) => obj.id === Number(id));
    if (newsItem) return newsItem;
    // При возможности отправлялся бы запрос по id определённой новости
    return { title: "", description: "" };
  });

  useEffect(() => {
    if (descRef.current) descRef.current.innerHTML = description;
  }, [description]);

  return (
    <>
      <Head>
        <title>ITMO News</title>
      </Head>

      <Header>
        <Image src={"/itmo.svg"} width={162} height={16} layout={"fixed"} />
      </Header>

      <main className={"container"}>
        <h1>{title}</h1>
        <div ref={descRef} />
      </main>
    </>
  );
};

export default News;
