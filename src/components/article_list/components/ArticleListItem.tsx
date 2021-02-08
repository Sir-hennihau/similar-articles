import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Article } from "../../../utils/Context";

interface ArticleListItemProps {
  article: Article;
}

export const ArticleListItem = ({
  article: { published, similarity, sourceName, thumbnail, title, url },
}: ArticleListItemProps) => {
  const similarityPercentage = (similarity * 100).toFixed();

  const publishedDateText = moment(published).format("ll");

  const onContainerClick = () => window.open(url, "blank");

  return (
    <ArticleListItemContainer onClick={onContainerClick}>
      <ArticleListItemThumbnail alt={title} src={thumbnail} />

      <div>
        <p>{title}</p>

        <ArticleListItemFooter>
          <ArticleListItemSimilarityText>
            {similarityPercentage}% similar
          </ArticleListItemSimilarityText>

          <ArticleListSpacer>|</ArticleListSpacer>

          <ArticleListItemInfoText>{publishedDateText}</ArticleListItemInfoText>

          <ArticleListSpacer>|</ArticleListSpacer>

          <ArticleListItemInfoText>{sourceName}</ArticleListItemInfoText>
        </ArticleListItemFooter>
      </div>
    </ArticleListItemContainer>
  );
};

const ArticleListItemContainer = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0 8px 4px -4px #ddd;
  margin: 10px 10px 10px 0;
  cursor: pointer;
`;

const ArticleListItemSimilarityText = styled.p`
  color: green;
  font-weight: bold;
`;

const ArticleListItemInfoText = styled.p`
  color: gray;
`;

const ArticleListItemThumbnail = styled.img`
  border-radius: 10px 0 0 10px;
  height: 100%;
  margin-right: 10px;
  width: 100px;
`;

const ArticleListItemFooter = styled.footer`
  display: flex;
`;

const ArticleListSpacer = styled.p`
  color: gray;
  margin-left: 5px;
  margin-right: 5px;
`;
