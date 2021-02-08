import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import { SearchContext } from "../../utils/Context";
import { ArticleListItem } from "./components/ArticleListItem";

export const ArticleList = () => {
  const { articles } = useContext(SearchContext);

  return (
    <ArticleListContainer>
      <Scrollbars style={{ height: 680, width: 500 }}>
        {articles?.map((article) => (
          <ArticleListItem article={article} />
        ))}
      </Scrollbars>
    </ArticleListContainer>
  );
};

const ArticleListContainer = styled.div``;
