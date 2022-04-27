import { parse } from "date-fns";

function dataIntoNews(data: any) {
  return data.news.map(
    ({ id, date, title, image_big, image_small, lead }: any) => ({
      id,
      date: parse(date.split(" ")[0], "yyyy-mm-dd", new Date()),
      title,
      image_big,
      image_small,
      description: lead,
    })
  );
}

export { dataIntoNews };
