export type SimilarToTextArticle = {
  author: string | null;
  document_id: number;
  image: string;
  published: string;
  similarity: number;
  source_name: string;
  source_slug: string;
  summary: string;
  thumbnail: string;
  title: string;
  url: string;
};

export interface SimilarToTextPostResponseBody {
  data: SimilarToTextArticle[];
}
