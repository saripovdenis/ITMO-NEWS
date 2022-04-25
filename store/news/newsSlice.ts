import { createSlice } from "@reduxjs/toolkit";
import { NewsState } from "./types";
import { setNewsReducer } from "./reducers";

const initialState: NewsState = {
  news: [
    {
      id: 1,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 2,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 3,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 4,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 5,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 6,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 7,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 8,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
    {
      id: 9,
      date: "12 december 2019",
      image_big: "https://news.itmo.ru/images/news/big/p12541.jpg",
      image_small: "https://news.itmo.ru/images/news/big/p12541.jpg",
      title: "title",
      description: "description",
    },
  ],
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
