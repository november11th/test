import axios from "axios";
import useSWR from "swr";
import { BASE_URL } from "../../../utils/common";

export const useCongestionHourlyQuery = (poiId: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${BASE_URL}/poi/congestion-poi-hourly/${poiId}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
