import axios from "axios";
import useSWR from "swr";

const useStartEndSpotQuery = (sigCode: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/kickboard/popular-start-end/${sigCode}`;

  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};

export default useStartEndSpotQuery;
