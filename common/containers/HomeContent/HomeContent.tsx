import React, { useEffect } from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../lib";
import { apiService } from "../../utils";
import { useToggle, useAppSelector, useAppDispatch } from "../../hooks";
import { RootState } from "../../../store";
import { setNews } from "../../../store/news";

const HomeContent: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const [isLoading, toggleIsLoading] = useToggle(false);
  const news = useAppSelector(({ news }: RootState) => news.news);

  useEffect(() => {
    toggleIsLoading();
    apiService.get("").then(({ data }) =>
      dispatch(
        setNews(
          data.news.map(({ id, date, title, image_big, image_small }: any) => ({
            id,
            date,
            title,
            image_big,
            image_small,
            description: "description",
          }))
        )
      )
    );
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
