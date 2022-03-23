import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../../../utils/common";

export const useCongestionCarQuery = (station: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${BASE_URL}/subway/congestion-car/${station}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};