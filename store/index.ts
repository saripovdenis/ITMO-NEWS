import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./news";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      news: newsReducer,
    },
  });

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore, { debug: false });

export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
