import axios from "axios";

const apiService = axios.create({
  baseURL: "'https://news.itmo.ru/api/news/list/?ver=2.0'",
  timeout: 1000,
});

export { apiService };
