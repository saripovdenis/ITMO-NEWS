import React from "react";

interface IItem {
  id: number;
  item: React.ReactNode;
}

interface IListItem {
  isSelected: boolean;
  item: React.ReactNode;
}

export type { IItem, IListItem };
