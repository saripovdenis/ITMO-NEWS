import React from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../lib";

const HomeContent: React.FC = ({}) => {
  return (
    <>
      <h1>Новости и события</h1>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomeContent;
