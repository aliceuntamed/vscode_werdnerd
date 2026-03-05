import { supabase } from "../client";
import type { Werd } from "../../../types/Werd";

export async function insertWerd(werd: Omit<Werd, "id">): Promise<Werd> {
  const { data, error } = await supabase
    .from("werds")
    .insert(werd)
    .select()
    .single()
    .returns<Werd>();

  if (error) throw error;
  return data;
}

export async function getRandomWerd(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .order("random()")
    .limit(1);

  if (error) throw error;
  return data && data.length > 0 ? data[0] : null;
}
export async function getAllWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .returns<Werd[]>();

  if (error) throw error;
  return data ?? [];
}
export async function getAllTags(): Promise<string[]> {
  const { data, error } = await supabase
    .from("werds")
    .select("tags")
    .returns<{ tags: string[] }[]>();

  if (error) throw error;

  const tagSet = new Set<string>();
  data.forEach((row) => row.tags.forEach((t) => tagSet.add(t)));

  return Array.from(tagSet);
}
