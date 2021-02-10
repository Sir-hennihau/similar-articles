import React, { ReactNode, useMemo, useState } from "react";
import { Article, SearchContext } from "../utils/Context";

interface SearchContextWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that manages search context.
 */
export const SearchContextWrapper = ({
  children,
}: SearchContextWrapperProps) => {
  const [articles, setArticles] = useState<Article[]>();

  const searchContextValue = useMemo(() => ({ articles, setArticles }), [
    articles,
  ]);

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
