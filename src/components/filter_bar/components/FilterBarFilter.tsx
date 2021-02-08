import React from "react";
import styled from "styled-components";
import { COLOR_FILTER } from "../../../utils/Styles";

interface FilterBarFilterProps {
  iconFileName: string;
  title: string;
}

export const FilterBarFilter = ({
  iconFileName,
  title,
}: FilterBarFilterProps) => {
  return (
    <FilterBarFilterContainer>
      <FilterBarFilterIcon
        alt={title}
        src={require(`../../../images/${iconFileName}`).default}
      />

      <FilterBarFilterTitle>{title}</FilterBarFilterTitle>

      <FilterBarFilterIcon
        alt="dropdown"
        src={require("../../../images/arrow-down-sign-to-navigate.png").default}
      />
    </FilterBarFilterContainer>
  );
};

const FilterBarFilterContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-right: 10px;
  width: 100%;
`;

const FilterBarFilterIcon = styled.img`
  height: 20px;
  margin-right: 10px;
  width: 20px;
  ${COLOR_FILTER};
`;

const FilterBarFilterTitle = styled.p`
  margin-right: 10px;
  white-space: nowrap;
  ${COLOR_FILTER}
`;
