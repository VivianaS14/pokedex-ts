import axios from "axios";
import { Items } from "../interfaces";
import { ItemsResponse } from "../interfaces/Items";
import { getFilterItems } from "../utils";

const itemApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getItems = async (itemName: string): Promise<ItemsResponse> => {
  const { data } = await itemApi.get<Items>("/item");
  const itemsResult = data.results.map((item, i) => ({
    id: i,
    name: item.name.replace("-", " "),
    imgSrc: `https://pokeapi.co/media/sprites/items/${item.name}.png`,
  }));
  const filterItems = getFilterItems({ results: itemsResult }, itemName);
  return { results: filterItems };
};
