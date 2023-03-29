import { API_URL } from "./API_URL";
import { Items, ItemsResponse } from "../interfaces";
import { getFilterItems } from "../utils";

interface Props {
  query: string;
  page: number;
}

export const getItems = async ({
  query,
  page,
}: Props): Promise<ItemsResponse> => {
  const { data } = await API_URL.get<Items>(
    `/item?offset=${(page - 1) * 20}&limit=20`
  );
  const itemsResult = data.results.map((item, i) => ({
    id: i,
    name: item.name.replace("-", " "),
    imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`,
  }));
  const filterItems = getFilterItems({ results: itemsResult }, query);
  return { results: filterItems };
};
