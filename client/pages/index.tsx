import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { PartialItem, TypeOf } from "@directus/sdk";
import { DirectusCollections } from "../generated/directus";

import getArticles from "../queries/getArticles";
import HOST from "../constants/host";

const HomePage: React.FC = () => {
  const { data: articles } = useQuery<PartialItem<TypeOf<DirectusCollections, "articles">>[]>(
    "articles",
    () => getArticles()
  );

  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          <img src={HOST + "/assets/" + article.image} alt="" />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("articles", () => getArticles());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
