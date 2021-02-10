import React from "react";
import { AppContainer } from "./components/AppContainer";
import { ToastProvider } from "react-toast-notifications";

import { ArticleList } from "./components/article_list/ArticleList";
import { FilterBar } from "./components/filter_bar/FilterBar";
import { Headline } from "./components/Headline";
import { SearchContextWrapper } from "./components/SearchContextWrapper";
import { SearchBar } from "./components/search_bar/SearchBar";

const App = () => {
  return (
    <SearchContextWrapper>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement="bottom-center"
      >
        <AppContainer>
          <Headline>Similar articles</Headline>

          <FilterBar />

          <SearchBar />

          <ArticleList />
        </AppContainer>
      </ToastProvider>
    </SearchContextWrapper>
  );
};

export default App;
