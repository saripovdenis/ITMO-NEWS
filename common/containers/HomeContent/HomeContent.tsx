import React, { useEffect } from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../lib";
import { apiService } from "../../utils";
import { useToggle, useAppSelector, useAppDispatch } from "../../hooks";
import { RootState } from "../../../store";
import { setNews } from "../../../store/news";

interface IHomeContent {
  langId: number;
}

const HomeContent: React.FC<IHomeContent> = ({ langId = 1 }) => {
  const dispatch = useAppDispatch();
  const [isLoading, toggleIsLoading] = useToggle(false);
  const news = useAppSelector(({ news }: RootState) => news.news);

  useEffect(() => {
    const fetch = async () => {
      toggleIsLoading();
      const { data } = await apiService.get(
        `/news/list/?ver=2.0&language_id=${langId}`
      );
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
      );
      toggleIsLoading();
    };

    fetch();
  }, [langId]);

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
