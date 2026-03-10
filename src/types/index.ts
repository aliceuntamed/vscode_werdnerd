export interface Werd {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  part_of_speech?: string;
  definition: string;
  language?: string;
  tags?: string | readonly string[];
  is_curated?: boolean;
  created_by?: string;
  source?: string;
}

export interface WOTDResponse {
  werd: Werd | null;
  loading: boolean;
  error?: string;
}

export interface CuratedPicksResponse {
  werds: Werd[];
  loading: boolean;
  error?: string;
}
