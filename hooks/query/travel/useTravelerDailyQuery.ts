import axios from "axios";
import useSWR from "swr";

const usePopularEmdrQuery = (districtCode: string) => {
  const fetcher = (url: string) =>
    axios.get(encodeURI(url)).then((res) => res.data.data);

  const key = `${process.env.NEXT_PUBLIC_API_BASE_URL}/travel/sig-traveler-daily/${districtCode}`;

  const { data: data_, error } = useSWR(key, fetcher);

  // 2주 트렌드로 변경
  const data = {
    ...data_,
    domesticTraveler: {
      date: data_?.domesticTraveler.date.slice(-14),
      travelerScore: data_?.domesticTraveler.travelerScore.slice(-14),
    },
    sigTraveler: {
      date: data_?.sigTraveler.date.slice(-14),
      travelerScore: data_?.sigTraveler.travelerScore.slice(-14),
    },
  };

  return { data, error };
};

export default usePopularEmdrQuery;
