import React from "react";
import styles from "./Card.module.css";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__image}></div>
        <div className={styles.card__text}>
          <div className={styles.card__text__content}>
            <span className={styles.card__text__title}>2 декабря 2019</span>
            <span className={styles.card__text__description}>
              Физарум//Перформер, 2019, Bioroboty019 это мультимедийный
              перформанс о связи человеческого и нечеловеческого, представленный
              на Кураторском форуме в Молодёжный...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
