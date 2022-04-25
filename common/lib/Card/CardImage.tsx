import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

interface ICardImage {
  src: string;
}

const CardImage: React.FC<ICardImage> = ({ src }) => {
  return (
    <div className={styles.card__image}>
      <Image src={src} layout="fill" objectFit="cover" />
    </div>
  );
};

export { CardImage };
