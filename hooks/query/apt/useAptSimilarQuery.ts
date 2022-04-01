import axios from "axios";
import useSWR from "swr";

export const useAptSimilarQuery = (id: string) => {
  // 유사아파트가 없을 때에는 [] 를 return
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data.similar ?? []);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/apt/move/${id}`;
  const { data, error } = useSWR(key, fetcher);

  return { data, error };
};
