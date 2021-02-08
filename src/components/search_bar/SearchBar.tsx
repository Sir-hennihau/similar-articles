import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";

import { SearchContext } from "../../utils/Context";
import { axios } from "../../utils/Api";
import { SimilarToTextPostResponseBody } from "./utils/searchBarTypes";

interface SearchBarProps {}

export const SearchBar = ({}: SearchBarProps) => {
  const [link, setLink] = useState("");

  const { addToast } = useToasts();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLink(event.target.value);
    console.log("invoked");
  };

  const onButtonClick = async () => {
    try {
      const parserResponse = await axios.get(
        "https://document-parser-api.lateral.io/",
        {
          params: {
            url:
              "https://www.bbc.com/future/article/20150415-the-buttons-that-do-nothing",
          },
        }
      );

      console.log("parserResponse", parserResponse);

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

      console.log("similarToTextResponse", similarToTextResponse);
    } catch (error) {
      addToast("An unexpected error occured.", { appearance: "error" });
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarInput onChange={onInputChange} />
      <SearchBarButton onClick={onButtonClick}>Search</SearchBarButton>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchBarInput = styled.input`
  height: 23px;
  border: 2px solid #0095c1;
  border-radius: 5px;
  outline: none;
  width: 100%;
`;

export const SearchBarButton = styled.button`
  color: #0095c1;
  cursor: pointer;
  border: 2px solid #0095c1;
  border-radius: 5px;
  background: white;
  outline: none;
  font-size: 20px;
  margin-left: 20px;
`;
