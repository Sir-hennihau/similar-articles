import React from "react";
import styled from "styled-components";
import { SearchBarButton } from "./components/SearchBarButton";
import { SearchBarInput } from "./components/SearchBarInput";

interface SearchBarProps {}

export const SearchBar = ({}: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchBarInput />
      <SearchBarButton />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div``;
