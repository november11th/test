import axios from "axios";
import useSWR from "swr";

export const usePoiMetaQuery = (poiId: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/poi/poi/${poiId}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
