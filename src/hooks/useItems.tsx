import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api";

export const useItems = (itemName: string) => {
  const itemsQuery = useQuery(["items", itemName], () => getItems(itemName));
  return itemsQuery;
};
