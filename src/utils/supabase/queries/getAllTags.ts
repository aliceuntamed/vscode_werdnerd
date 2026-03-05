import { supabase } from "../client";

export async function getAllTags() {
  const { data, error } = await supabase
    .from("werds")
    .select("tags")
    .returns<{ tags: string[] }[]>();

  if (error) throw error;

  const tagSet = new Set<string>();
  data.forEach((row) => row.tags.forEach((t) => tagSet.add(t)));

  return Array.from(tagSet);
}
