import { supabase } from "../client";
import type { Werd } from "../../../types";

export async function getCuratedWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .eq("is_curated", true)
    .order("werd", { ascending: true });

  if (error) throw error;
  return data || [];
}
