import { supabase } from "../client";
import type { Werd } from "../../../types";

export async function getAllTags() {
  const { data, error } = await supabase
    .from("words")
    .select("tags")
    .returns<{ tags: string[] }[]>();

  if (error) throw error;

  const tagSet = new Set<string>();
  data.forEach((row) => row.tags.forEach((t) => tagSet.add(t)));

  return Array.from(tagSet);
}
