import { ParsedNews } from "@/types/ParsedNews";
import { useQuery } from "@tanstack/react-query";

const fetchParsedNews = async (newsUrl: string): Promise<ParsedNews> => {
  const res = await fetch(
    `https://news.abhishekg.info.np/api/onlinekhabar?url=${newsUrl}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch parsed news");
  }

  const json: ParsedNews = await res.json();

  return json;
};

// Custom hook
export const useParsedNews = (newsUrl: string) => {
  return useQuery({
    queryKey: ["parsedNews", newsUrl],
    queryFn: () => fetchParsedNews(newsUrl),
  });
};
