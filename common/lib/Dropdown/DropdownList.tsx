import React from "react";
import styles from "./Dropdown.module.css";

interface IDropdownSelector {
  list: Array<React.ReactNode>;
}

const DropdownList: React.FC<IDropdownSelector> = ({ list }) => {
  const wrappedList = list.map((node) => (
    <div className={styles.dropdown__list__item_container}>{node}</div>
  ));
  return <div className={styles.dropdown__list}>{wrappedList}</div>;
};

export { DropdownList };
