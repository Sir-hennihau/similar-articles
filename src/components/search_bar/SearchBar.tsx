import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";

import { SearchContext } from "../../utils/Context";
import { axios } from "../../utils/Api";
import { SimilarToTextPostResponseBody } from "./utils/searchBarTypes";

/**
 * Input field that enables searching for similar articles. Sends multiple network requests on submit.
 */
export const SearchBar = () => {
  const [link, setLink] = useState("");

  const { setArticles } = useContext(SearchContext);

  const { addToast } = useToasts();

  const getValidationError = () => {
    if (!link) {
      return;
    }

    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (link.match(URL_REGEX)) {
      return;
    }

    return "Please enter a valid URL.";
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLink(event.target.value);
  };

  const onButtonClick = async () => {
    if (!link || getValidationError()) {
      return addToast("Please enter a valid URL.", {
        appearance: "error",
      });
    }

    try {
      const parserResponse = await axios.get(
        "https://document-parser-api.lateral.io/",
        {
          params: {
            url: link,
          },
        }
      );

      const articleBody = parserResponse.data?.body;

      if (!articleBody) {
        return addToast("Could not retrieve article information.", {
          appearance: "error",
        });
      }

      const similarToTextResponse = await axios.post<SimilarToTextPostResponseBody>(
        "https://news-api.lateral.io/documents/similar-to-text",
        {
          text: articleBody,
        },
        {
          headers: {
            "content-type": "application/json",
            "subscription-key": "f53dd4aea5bfc8ecd850fcbe1b08921e",
          },
        }
      );

      console.log("similarToTextResponse.data", similarToTextResponse.data);

      const convertedArticles = similarToTextResponse.data.map(
        ({ published, similarity, source_name, thumbnail, title, url }) => ({
          published,
          similarity,
          thumbnail,
          title,
          url,
          sourceName: source_name,
        })
      );

      setArticles(convertedArticles);
    } catch (error) {
      addToast("An unexpected error occured.", { appearance: "error" });
    }
  };

  return (
    <div data-test="SearchBar">
      <SearchBarInputContainer>
        <SearchBarInput onChange={onInputChange} />
        <SearchBarButton onClick={onButtonClick}>Search</SearchBarButton>
      </SearchBarInputContainer>
      <SearchBarValidationError data-test="SearchBarValidationError">
        {getValidationError()}
      </SearchBarValidationError>
    </div>
  );
};

const SearchBarInputContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

const SearchBarInput = styled.input`
  height: 23px;
  border: 2px solid #0095c1;
  border-radius: 5px;
  outline: none;
  width: 100%;
`;

const SearchBarButton = styled.button`
  color: #0095c1;
  cursor: pointer;
  border: 2px solid #0095c1;
  border-radius: 5px;
  background: white;
  outline: none;
  font-size: 20px;
  margin-left: 20px;
`;

const SearchBarValidationError = styled.p`
  color: red;
`;
