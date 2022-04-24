import React from "react";
import styles from "./Dropdown.module.css";
import { useToggle } from "../../hooks";
import { DropdownSelector } from "./DropdownSelector";
import { DropdownList } from "./DropdownList";

interface IDropdown {
  value: React.ReactNode;
  list: Array<React.ReactNode>;
}

const Dropdown: React.FC<IDropdown> = ({ value, list }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <div className={styles.dropdown} role={"button"} onClick={toggleIsOpen}>
      <div className={styles.dropdown__content}>
        <DropdownSelector value={value} />
        {isOpen && <DropdownList list={list} />}
      </div>
    </div>
  );
};

export default Dropdown;
