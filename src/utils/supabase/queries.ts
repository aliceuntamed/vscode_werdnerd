// supabase/queries.ts
import { supabase } from "./client";
import type { Werd } from "../../types";

// Fetch all werds with relational tags
export async function fetchWerds(): Promise<Werd[]> {
  const { data, error } = await supabase.from("werds").select(`
      werd_id,
      werd,
      werd_tags (
        tags:tag_id (
          tag_name
        )
      )
    `);

  if (error) throw error;

  return data.map((w) => ({
    werd_id: w.werd_id,
    werd: w.werd,
    tags: w.werd_tags?.map((tag: any) => tag.tag_name) ?? [],
  }));
}

// Fetch all tags
export async function fetchTags() {
  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .order("tag_name");

  if (error) throw error;
  return data;
}
