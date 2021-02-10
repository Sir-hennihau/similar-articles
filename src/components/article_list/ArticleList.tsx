import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import { SearchContext } from "../../utils/Context";
import { ArticleListItem } from "./components/ArticleListItem";

/**
 * Renders a list of articles.
 */
export const ArticleList = () => {
  const { articles } = useContext(SearchContext);

  return (
    <ArticleListContainer data-test="ArticleList">
      <Scrollbars style={{ height: 680, width: 500 }}>
        {articles?.map((article, index) => (
          <ArticleListItem article={article} key={index} />
        ))}
      </Scrollbars>
    </ArticleListContainer>
  );
};

const ArticleListContainer = styled.div``;
