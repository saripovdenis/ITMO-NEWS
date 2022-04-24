import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { Dropdown } from "../../lib/Dropdown";
import { LangItem } from "../../lib/LangItem";
import { Language, languages } from "../../../constants";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState<Language>(languages.ru);
  const languagesList = Object.values(languages).map((obj) => ({
    id: obj.id,
    item: (
      <LangItem
        src={obj.src}
        label={obj.label}
        key={obj.id}
        onClick={() => setSelectedLang(obj)}
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
              id: selectedLang.id,
              item: (
                <LangItem src={selectedLang.src} label={selectedLang.label} />
              ),
            }}
            list={languagesList}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
