import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { SearchContext } from "../utils/Context";

interface SearchContextWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that manages search context.
 */
export const SearchContextWrapper = ({
  children,
}: SearchContextWrapperProps) => {
  const [search, setSearch] = useState("");

  const searchContextValue = useMemo(() => ({ search, setSearch }), [search]);

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
