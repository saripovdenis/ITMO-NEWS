import React, { useEffect, useRef } from "react";
import styles from "./HomeContent.module.css";
import { Card } from "../../common/lib";
import { apiService, dataIntoNews } from "../../common/utils";
import { useToggle, useAppSelector, useAppDispatch } from "../../common/hooks";
import { RootState } from "../../store";
import { setNews } from "../../store/news";
import { useRouter } from "next/router";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";

interface IHomeContent {
  langId: number;
}

const HomeContent: React.FC<IHomeContent> = ({ langId = 1 }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, toggleIsLoading] = useToggle(false);
  const news = useAppSelector(({ news }: RootState) => news.news);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      toggleIsLoading();
      const { data } = await apiService.get(
        `/news/list/?ver=2.0&per_page=9&lead=true&language_id=${langId}`
      );
      dispatch(setNews(dataIntoNews(data)));
      toggleIsLoading();
    };

    if (isMounted.current) {
      fetch();
    } else {
      isMounted.current = true;
    }
  }, [langId]);

  return (
    <>
      <h1>Новости и события</h1>
      <div className={styles.cardsContainer}>
        {news.map((obj) => (
          <Card
            key={obj.id}
            onClick={() => router.push(`/news/${obj.id}`)}
            isLoading={isLoading}
            src={obj.image_big}
            title={format(obj.date, "d MMMM y", {
              locale: langId === 1 ? ru : en,
            })}
            description={obj.title}
          />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
