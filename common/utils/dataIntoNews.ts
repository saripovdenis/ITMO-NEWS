function dataIntoNews(data: any) {
  return data.news.map(
    ({ id, date, title, image_big, image_small, lead }: any) => ({
      id,
      date,
      title,
      image_big,
      image_small,
      description: lead,
    })
  );
}

export { dataIntoNews };
