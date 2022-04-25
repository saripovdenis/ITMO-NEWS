import React, { useEffect } from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../lib";
import { apiService } from "../../utils";
import { useToggle } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const HomeContent: React.FC = ({}) => {
  const [isLoading, toggleIsLoading] = useToggle(false);
  const news = useSelector(({ news }: RootState) => news.news);

  useEffect(() => {
    toggleIsLoading();
    apiService.get("").then(console.log);
    toggleIsLoading();
  }, []);

  return (
    <>
      <h1>Новости и события</h1>
      <div className={styles.cardsContainer}>
        {news.map((obj) => (
          <Card
            key={obj.id}
            isLoading={isLoading}
            src={obj.image_big}
            title={obj.date}
            description={obj.title}
          />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
