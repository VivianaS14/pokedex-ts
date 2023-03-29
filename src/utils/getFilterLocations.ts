import { LocationsResult } from "../interfaces";

export const getFilterLocations = (data: LocationsResult, query: string) => {
  return data.results.filter((loca) =>
    loca.name.toLowerCase().match(query.toLowerCase())
  );
};
