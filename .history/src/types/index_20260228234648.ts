export interface Werd {
  werd_id: ;
  werd: string;
  pronunciation?: string;
  definition?: string;
  part_of_speech?: string;
  tags?: string;
  is_curated?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface WOTDResponse {
  werd: Werd | null;
  loading: boolean;
  error?: string;
}

export interface CuratedPicksResponse {
  werds: werd[];
  loading: boolean;
  error?: string;
}
