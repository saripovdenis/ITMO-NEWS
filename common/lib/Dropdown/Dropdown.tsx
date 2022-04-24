import React from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";
import { useToggle } from "../../hooks";

interface IDropdown {
  value: React.ReactNode;
  list: Array<React.ReactNode>;
}

const Dropdown: React.FC<IDropdown> = ({ value, list }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <div className={styles.dropdown} role={"button"} onClick={toggleIsOpen}>
      <div className={styles.dropdown__content}>
        <div className={styles.dropdown__selector}>
          {value}
          <div className={styles.dropdown__selector__ico}>
            <Image src={"/arrow.svg"} width={12} height={12} layout={"fixed"} />
          </div>
        </div>
        {isOpen && <div className={styles.dropdown__list}>{list}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
