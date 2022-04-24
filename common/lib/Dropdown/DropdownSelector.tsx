import React from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";

interface IDropdownSelector {
  children: React.ReactNode;
  isOpen: boolean;
}

const DropdownSelector: React.FC<IDropdownSelector> = ({
  children,
  isOpen,
}) => {
  return (
    <div className={styles.dropdown__selector}>
      <div className={styles.selected}>{children}</div>
      <div
        className={`${styles.dropdown__selector__ico} ${
          isOpen && styles.rotated
        }`}
      >
        <Image src={"/arrow.svg"} width={12} height={12} layout={"fixed"} />
      </div>
    </div>
  );
};

export { DropdownSelector };
