import React from "react";
import styles from "./Card.module.css";
import { CardText } from "./CardText";
import { CardImage } from "./CardImage";
import CardSkeleton from "./CardSkeleton";

interface ICard {
  src: string;
  title: string;
  description: string;
  isLoading?: boolean;
}

const Card: React.FC<ICard> = ({
  src,
  title,
  description,
  isLoading = false,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
            <CardImage src={src} />
            <CardText title={title} description={description} />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
