import { PopularNewsResponseType } from "@/types/PopularNews";
import { useQuery } from "@tanstack/react-query";

const fetchPopularUpdates = async () => {
  const res = await fetch(
    "https://www.onlinekhabar.com/wp-json/okapi/v1/trending-posts?limit=100"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch popular news");
  }

  const json: PopularNewsResponseType = await res.json();
  console.log("API FETCHED...");

  return json.data.news;
};

// Custom hook
export const usePopularUpdates = () => {
  return useQuery({
    queryKey: ["popularNews"],
    queryFn: fetchPopularUpdates,
  });
};
