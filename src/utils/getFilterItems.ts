import { ItemsResponse } from "../interfaces";

export const getFilterItems = (itemData: ItemsResponse, query: string) => {
  return itemData.results.filter((item) =>
    item.name.toLowerCase().match(query.toLowerCase())
  );
};
