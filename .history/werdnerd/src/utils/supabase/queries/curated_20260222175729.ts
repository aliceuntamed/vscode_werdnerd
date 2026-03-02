import { supabase } from "../client";

export async function getCuratedWerds() {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .eq("is_curated", true)
    .order("werd", { ascending: true });

  if (error) throw error;
  return data;
}
