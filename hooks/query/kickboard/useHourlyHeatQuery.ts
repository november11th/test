import axios from "axios";
import useSWR from "swr";

const useHourlyHeatQuery = (sigCode: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/kickboard/hourly-heat/${sigCode}`;

  const { data, error } = useSWR(key, fetcher);
  return { data, error };
};

export default useHourlyHeatQuery;
