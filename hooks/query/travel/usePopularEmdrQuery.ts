import axios from "axios";
import useSWR from "swr";

const usePopularEmdrQuery = (districtCode: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/travel/popular-ri/${districtCode}`;

  const { data, error } = useSWR(key, fetcher);
  return { data, error };
};

export default usePopularEmdrQuery;
