import { useEffect, useState } from "react";
import { getCuratedWerds } from "../utils/supabase/queries/curated";
import type { Werd, CuratedPicksResponse } from "../types";

export function useCuratedPicks(): CuratedPicksResponse {
  const [werds, setwerds] = useState<Werd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    async function load() {
      try {
        const data = await getCuratedWerds();
        setwerds(data || []);
      } catch (err) {
        console.error("Failed to load curated picks:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { werds, loading, error };
}
