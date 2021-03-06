import React from "react";
import styles from "./Dropdown.module.css";
import { useToggle } from "../../hooks";
import { DropdownSelector } from "./DropdownSelector";
import { DropdownList } from "./DropdownList";
import { IItem, IListItem } from "./types";

interface IDropdown {
  selected: IItem;
  list: Array<IItem>;
}

const Dropdown: React.FC<IDropdown> = ({ selected, list }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const dropdownList = list
    .filter((obj) => obj.id !== selected.id)
    .concat([selected])
    .map(
      (obj): IListItem => ({
        id: obj.id,
        isSelected: selected.id === obj.id,
        item: obj.item,
      })
    );
  return (
    <div className={styles.dropdown} role={"button"} onClick={toggleIsOpen}>
      <div className={styles.dropdown__content}>
        <DropdownSelector isOpen={isOpen}>{selected.item}</DropdownSelector>
        {isOpen && <DropdownList list={dropdownList} />}
      </div>
    </div>
  );
};

export default Dropdown;
