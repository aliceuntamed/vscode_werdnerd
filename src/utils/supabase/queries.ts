// supabase/queries.ts
import { supabase } from "./client";
import type { Werd } from "../../types";

// Fetch all werds with relational tags
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
    tags: w.werd_tags?.map((tag: any) => tag.tag_name) ?? [],
  }));
}

// Fetch all tags
export async function fetchTags() {
  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .order("tag_name");

  if (error) throw error;
  return data;
}

// Fetch random werd
export async function getRandomWerd(): Promise<Werd | null> {
  const { data, error } = await supabase
    .from("werds")
    .select("werd_id, werd, werd_tags(tags:tag_id(tag_name))")
    .limit(1);

  if (error) {
    console.error("Error fetching random werd:", error);
    return null;
  }

  if (!data || data.length === 0) return null;

  const werd = data[0];
  return {
    werd_id: werd.werd_id,
    werd: werd.werd,
    tags: werd.werd_tags?.map((tag: any) => tag.tag_name) ?? [],
  };
}

// Fetch Word of the Day
export async function getWOTD(): Promise<Werd | null> {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("wotd")
    .select("werd_id, werds(werd_id, werd, werd_tags(tags:tag_id(tag_name)))")
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

  if (!data?.werds || !Array.isArray(data.werds) || data.werds.length === 0)
    return null;

  const werd = data.werds[0];
  return {
    werd_id: werd.werd_id,
    werd: werd.werd,
    tags: werd.werd_tags?.map((tag: any) => tag.tag_name) ?? [],
  };
}
