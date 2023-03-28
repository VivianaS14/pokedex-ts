import axios from "axios";
import { Item } from "../interfaces";

const itemApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getItem = async (itemName: string): Promise<Item> => {
  const itemResult = await itemApi.get<Item>(`/item/${itemName}`);
  return itemResult.data;
};
