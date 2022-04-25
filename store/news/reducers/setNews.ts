import { NewsState, NewsArray } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";

function setNewsReducer(state: NewsState, action: PayloadAction<NewsArray>) {
  state.news = action.payload;
}

export { setNewsReducer };
