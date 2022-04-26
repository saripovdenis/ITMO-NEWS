import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { Dropdown } from "../../lib/Dropdown";
import { LangItem } from "../../lib/LangItem";
import { Language, languages } from "../../../constants";

interface IHeader {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<IHeader> = ({ lang, setLang }) => {
  const languagesList = Object.values(languages).map((obj) => ({
    id: obj.id,
    item: (
      <LangItem
        src={obj.src}
        label={obj.label}
        key={obj.id}
        onClick={() => setLang(obj)}
      />
    ),
  }));

  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.header__content}>
          <Image src={"/itmo.svg"} width={162} height={16} layout={"fixed"} />
          <Dropdown
            selected={{
              id: lang.id,
              item: <LangItem src={lang.src} label={lang.label} />,
            }}
            list={languagesList}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
