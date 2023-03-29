import { API_URL } from "./API_URL";
import { Location } from "../interfaces";

export const getLocation = async (locationName: string): Promise<Location> => {
  const { data } = await API_URL.get<Location>(`/location/${locationName}`);
  return data;
};
