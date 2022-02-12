import directus from "../lib/directus";

const getArticles = async () => {
  const { data } = await directus.items("articles").readMany();
  return data;
};

export default getArticles;
