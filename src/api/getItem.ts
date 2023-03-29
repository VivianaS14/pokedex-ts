import { API_URL } from "./API_URL";
import { Item } from "../interfaces";

export const getItem = async (itemName: string): Promise<Item> => {
  const itemResult = await API_URL.get<Item>(`/item/${itemName}`);
  return itemResult.data;
};
