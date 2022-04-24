import React from "react";
import Image from "next/image";
import styles from "./LangItem.module.css";

interface ILangItem {
  label: string;
  src: string;
  onClick?: () => void;
}

const LangItem: React.FC<ILangItem> = ({ src, label, onClick = () => {} }) => {
  return (
    <div className={styles.lang_item} onClick={onClick}>
      <div className={styles.lang_item__image}>
        <Image src={src} width={24} height={24} layout={"fixed"} />
      </div>
      <span className={styles.lang_item__label}>{label}</span>
    </div>
  );
};

export default LangItem;
