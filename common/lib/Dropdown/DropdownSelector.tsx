import React from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";

interface IDropdownSelector {
  value: React.ReactNode;
}

const DropdownSelector: React.FC<IDropdownSelector> = ({ value }) => {
  return (
    <div className={styles.dropdown__selector}>
      {value}
      <div className={styles.dropdown__selector__ico}>
        <Image src={"/arrow.svg"} width={12} height={12} layout={"fixed"} />
      </div>
    </div>
  );
};

export { DropdownSelector };
