import type { Werd } from "../../../types";
import { supabase } from "../client";

export async function getAllWerds() {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .returns<Werd[]>();

  if (error) throw error;
  return data ?? [];
}
