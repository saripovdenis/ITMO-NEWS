import React from "react";

interface IItem {
  id: number;
  item: React.ReactNode;
}

interface IListItem {
  id: number;
  isSelected: boolean;
  item: React.ReactNode;
}

export type { IItem, IListItem };
