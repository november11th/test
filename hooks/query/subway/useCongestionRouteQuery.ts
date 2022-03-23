import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../../../utils/common";

export const useCongestionRouteQuery = (station: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data[0]);

  const key = `${BASE_URL}/subway/congestion-train-route?from_station=${station}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
