import React from "react";
import styled from "styled-components";
import { COLOR_FILTER } from "../../utils/Styles";
import { FilterBarFilter } from "./components/FilterBarFilter";

/**
 * Enables user to select from various filters.
 */
export const FilterBar = () => (
  <FilterBarContainer data-test="FilterBar">
    <FilterBarFilterContainer>
      <FilterBarFilterText>Filters:</FilterBarFilterText>

      <FilterBarFilter iconFileName="newspaper.png" title="MY SOURCES" />

      <FilterBarFilter iconFileName="clock.png" title="PAST MONTH" />
    </FilterBarFilterContainer>
    <FilterBarHelpIcon src={require("../../images/information.png").default} />
  </FilterBarContainer>
);

const FilterBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const FilterBarFilterText = styled.p`
  color: gray;
  font-weight: bold;
  margin-right: 10px;
`;

const FilterBarFilterContainer = styled.div`
  display: flex;
`;

const FilterBarHelpIcon = styled.img`
  cursor: pointer;
  height: 30px;
  width: 30px;
  ${COLOR_FILTER}
`;
