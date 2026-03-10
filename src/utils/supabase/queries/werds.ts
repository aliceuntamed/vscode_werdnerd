import { supabase } from "../client";
import type { Werd } from "@/types";

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

  return data?.werds as Werd | null;
}
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
