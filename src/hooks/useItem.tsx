import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "../api";

export const useItem = (itemName: string = "") => {
  const itemQuery = useQuery(["items", itemName], () => getItem(itemName));
  return itemQuery;
};
