import React from "react";
import { AppContainer } from "./components/AppContainer";
import { FilterBar } from "./components/filter_bar/FilterBar";
import { Headline } from "./components/Headline";
import { SearchBar } from "./components/search_bar/SearchBar";

function App() {
  return (
    <AppContainer>
      <Headline>Similar articles</Headline>
      <FilterBar />
      <SearchBar />
    </AppContainer>
  );
}

export default App;
