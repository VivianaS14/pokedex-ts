import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getLocation } from "../api";

export const useLocation = (locationName: string = "") => {
  const locationQuery = useQuery(["locations", locationName], () =>
    getLocation(locationName)
  );
  return locationQuery;
};
