import { API_URL } from "./API_URL";
import { LocationsApi, LocationsResult } from "../interfaces";
import { getFilterLocations } from "../utils";

interface Props {
  query: string;
  page: number;
}

export const getLocations = async ({
  query,
  page,
}: Props): Promise<LocationsResult> => {
  const { data } = await API_URL.get<LocationsApi>(
    `/location?offset=${(page - 1) * 20}&limit=20`
  );
  const filterItem = getFilterLocations({ results: data.results }, query);
  return { results: filterItem };
};
