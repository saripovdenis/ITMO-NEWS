import axios from "axios";

const apiService = axios.create({
  baseURL: "https://news.itmo.ru/api",
  timeout: 1000,
});

export { apiService };
