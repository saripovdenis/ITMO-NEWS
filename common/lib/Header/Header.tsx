import React from "react";
import styles from "./Header.module.css";

interface IHeader {
  children?: React.ReactNode | Array<React.ReactNode>;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.header__content}>{children}</div>
      </div>
    </header>
  );
};

export default Header;
