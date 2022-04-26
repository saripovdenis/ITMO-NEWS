import React from "react";
import styles from "./Card.module.css";

interface ICardText {
  title: string;
  description: string;
}

const CardText: React.FC<ICardText> = ({ title, description }) => {
  return (
    <div className={styles.card__text}>
      <div className={styles.card__text__content}>
        <span className={styles.card__text__title}>{title}</span>
        <span className={styles.card__text__description}>{description}</span>
      </div>
    </div>
  );
};

export { CardText };
