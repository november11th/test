import axios from "axios";
import useSWR from "swr";

export const useCongestionTrainQuery = (station: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data[0]);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/subway/congestion-train/${station}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
