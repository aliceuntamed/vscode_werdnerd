import { Werd } from "../types/Werd";
import { supabase } from "../utils/supabase/client";

export async function getAllWords() {
  const { data, error } = await supabase
    .from("words")
    .select("*")
    .returns<Werd[]>();

  if (error) throw error;
  return data ?? [];
}
