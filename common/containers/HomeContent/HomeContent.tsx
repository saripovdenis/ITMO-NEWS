import React from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../lib";

const HomeContent: React.FC = ({}) => {
  return (
    <>
      <h1>Новости и события</h1>
      <div className={styles.cardsContainer}>
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
        <Card
          src={"https://news.itmo.ru/images/news/big/p12541.jpg"}
          title={"tittle"}
          description={"description"}
        />
      </div>
    </>
  );
};

export default HomeContent;
