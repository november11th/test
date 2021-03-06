import axios from "axios";
import useSWR from "swr";

export const useCongestionHourlyQuery = (poiId: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/poi/congestion-poi-hourly/${poiId}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
