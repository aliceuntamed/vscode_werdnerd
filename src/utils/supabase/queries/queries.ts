// supabase/queries.ts
import { Werd } from "../../types/types";
import { data } from "react-router-dom";
import { supabase } from "../client";

// Fetch werds with their tags
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
    tags: w.werd_tags?.map((j) => j.tags.tag_name) ?? [],
  }));
}

export async function fetchTags() {
  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .order("tag_name");

  if (error) throw error;
  return data;
}

// Fetch all werds
export async function getAllWerds(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .order("werd", { ascending: true });

  if (error) {
    console.error("Error fetching werds:", error);
    return [];
  }

  return data as Werd[];
}

// Fetch a random werd
export async function getRandomWerd(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .order("random()")
    .limit(1);

  if (error) {
    console.error("Error fetching random werd:", error);
    return null;
  }

  return data?.[0] ?? null;
}

// Fetch WOTD (random each day)
export async function getWOTD(): Promise<Werd | null> {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("wotd")
    .select("werd_id, werds(*)")
    .eq("date", today)
    .single();

  if (error) {
    // If no WOTD exists yet, generate one
    const random = await getRandomWerd();
    if (!random) return null;

    await supabase.from("wotd").insert({
      date: today,
      werd_id: random.werd_id,
    });

    return random;
  }

  return data?.werds?.[0] ?? null;
}
// Fetch curated picks
export async function getCuratedPicks(): Promise<Werd[]> {
  const { data, error } = await supabase
    .from("werds")
    .select("*")
    .eq("is_curated", true)
    .order("werd", { ascending: true });

  if (error) {
    console.error("Error fetching curated picks:", error);
    return [];
  }

  return data as Werd[];
}
//Fetch all werds with their tags
const werds = data.map((w) => ({
  werd_id: w.werd_id,
  werd: w.werd,
  tags: w.werd_tags.map((j) => j.tags.tag_name),
}));
