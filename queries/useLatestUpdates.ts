import { LatestNews, LatestNewsResponseType } from "@/types/LatestNews";
import { useQuery } from "@tanstack/react-query";

const fetchLatestNews = async (): Promise<LatestNews[]> => {
  const res = await fetch(
    "https://www.onlinekhabar.com/wp-json/okapi/v1/taja-updates?limit=100"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest news");
  }

  const json: LatestNewsResponseType = await res.json();
  console.log("API FETCHED...");

  return json.data.news;
};

// Custom hook
export const useLatestNews = () => {
  return useQuery({
    queryKey: ["latestNews"],
    queryFn: fetchLatestNews,
  });
};
