import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api";

export const useLocations = (query: string) => {
  const [page, setPage] = useState<number>(1);

  const locationsQuery = useQuery(
    ["locations", { query, page }],
    () => getLocations({ query, page }),
    {
      keepPreviousData: true,
    }
  );

  const nextPage = () => {
    if (locationsQuery.data?.results.length === 0) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    locationsQuery,
    page: locationsQuery.isFetching ? "Loading.." : page,
    nextPage,
    prevPage,
  };
};
