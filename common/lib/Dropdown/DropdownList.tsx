import React from "react";
import styles from "./Dropdown.module.css";
import { IListItem } from "./types";

interface IDropdownSelector {
  list: Array<IListItem>;
}

const DropdownList: React.FC<IDropdownSelector> = ({ list }) => {
  const wrappedList = list.map(({ isSelected, item }) => (
    <div
      className={`${styles.dropdown__list__item_container} ${
        isSelected && styles.active
      }`}
    >
      {item}
    </div>
  ));
  return <div className={styles.dropdown__list}>{wrappedList}</div>;
};

export { DropdownList };
