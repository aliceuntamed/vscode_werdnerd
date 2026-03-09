export interface Werd {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  definition?: string;
  part_of_speech?: string;
  tags?: string | readonly string[];
  is_curated?: boolean;
  created_at?: string;
  updated_at?: string;
  language?: string;
  created_by?: string;
  created_on?: string;
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
