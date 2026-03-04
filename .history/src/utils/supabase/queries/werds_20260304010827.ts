import { supabase } from "../client";
import type { Werd } from "../../../types";

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
