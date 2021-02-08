import { createContext } from "react";

export type Article = {
  published: string;
  similarity: number;
  sourceName: string;
  thumbnail: string;
  title: string;
  url: string;
};

export const SearchContext = createContext<{
  articles: Article[] | undefined;
  setArticles: (article: Article[]) => void;
}>({ articles: undefined, setArticles: (article) => undefined });
