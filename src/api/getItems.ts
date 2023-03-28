import axios from "axios";
import { FC } from "react";
import { Items } from "../interfaces";
import { ItemsResponse } from "../interfaces/Items";
import { getFilterItems } from "../utils";

interface Props {
  query: string;
  page: number;
}

const itemApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getItems = async ({
  query,
  page,
}: Props): Promise<ItemsResponse> => {
  const { data } = await itemApi.get<Items>(
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
