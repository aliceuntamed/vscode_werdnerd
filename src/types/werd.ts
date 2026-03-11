// types/werd.ts

// Shape of the join returned by Supabase
export interface WerdTagJoin {
  tags: {
    tag_name: string;
  };
}

// Normalized Werd object used in your UI
export interface Werd {
  werd_id: string;
  werd: string;
  tags: string[]; // normalized relational tags
}
