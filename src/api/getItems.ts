import axios from "axios";
import { Items } from "../interfaces";
import { ItemsResponse } from "../interfaces/Items";

const itemApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/item",
});

export const getItems = async (itemName: string): Promise<ItemsResponse> => {
  const { data } = await itemApi.get<Items>("/");
  const itemsResult = data.results.map((item, i) => ({
    id: i,
    name: item.name,
    imgSrc: `https://pokeapi.co/media/sprites/items/${item.name}.png`,
  }));
  return { results: itemsResult };
};
