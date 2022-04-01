import axios from "axios";
import useSWR from "swr";

// 옵션에 'title'을 추가
const shapeOptions = (options: any) => {
  return options?.map((item: any) => {
    return { ...item, title: item.districtName };
  });
};

const useOptionsQuery = () => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/travel/sig`;

  const { data, error } = useSWR(key, fetcher);
  const options = shapeOptions(data);

  return { options, error };
};

export default useOptionsQuery;
