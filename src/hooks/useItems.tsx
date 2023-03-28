import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api";

export const useItems = (query: string) => {
  const [page, setPage] = useState<number>(1);

  const itemsQuery = useQuery(
    ["items", { query, page }],
    () => getItems({ query, page }),
    { keepPreviousData: true }
  );

  const nextPage = () => {
    if (itemsQuery.data?.results.length === 0) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    itemsQuery,
    page: itemsQuery.isFetching ? "Loading..." : page,
    nextPage,
    prevPage,
  };
};
