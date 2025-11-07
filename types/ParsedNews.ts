export interface ParsedNews {
  ok: boolean;
  data?: {
    title: string;
    author: string;
    dateTime: string;
    ai_summaries?: string[];
    excerpt?: string;
    newsDescription: string[];
    postTags: string[];
    postThumbnail: string | undefined;
    images?: Array<{
      src: string;
      caption: string | null;
      type: "paragraph" | "figure";
    }>;
  };
  error?: string;
}
