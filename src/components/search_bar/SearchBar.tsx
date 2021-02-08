import React from "react";
import styled from "styled-components";

interface SearchBarProps {}

export const SearchBar = ({}: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchBarInput />
      <SearchBarButton>Search</SearchBarButton>
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
