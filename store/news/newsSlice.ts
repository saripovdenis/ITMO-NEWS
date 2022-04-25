import { createSlice } from "@reduxjs/toolkit";
import { NewsState } from "./types";
import { setNewsReducer } from "./reducers";

const initialState: NewsState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: setNewsReducer,
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
