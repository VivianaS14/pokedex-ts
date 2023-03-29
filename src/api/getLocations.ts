import axios from "axios";
import { LocationsApi, LocationsResult } from "../interfaces";
import { getFilterLocations } from "../utils";

interface Props {
  query: string;
  page: number;
}

const locationsApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getLocations = async ({
  query,
  page,
}: Props): Promise<LocationsResult> => {
  const { data } = await locationsApi.get<LocationsApi>(
    `/location?offset=${(page - 1) * 20}&limit=20`
  );
  const filterItem = getFilterLocations({ results: data.results }, query);
  return { results: filterItem };
};
