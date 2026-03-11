// types.ts

export interface Tag {
  tag_id: string;
  tag_name: string;
}

export interface WerdTagJoin {
  tags: {
    tag_name: string;
  };
}

export interface Werd {
  werd_id: string;
  werd: string;
  tags: string[]; // normalized relational tags
}
export interface WerdDefinition {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  part_of_speech?: string;
  definition: string;
  language?: string;
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
