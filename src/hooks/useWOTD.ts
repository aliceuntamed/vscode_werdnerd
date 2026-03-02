import { useEffect, useState } from "react";
import { getRandomWerd } from "../utils/supabase/queries/werds";
import type { Werd, WOTDResponse } from "../types";

export function useWOTD(): WOTDResponse {
  const [wotd, setWotd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    async function load() {
      try {
        const werd = await getRandomWerd();
        setWotd(werd);
      } catch (err) {
        console.error("Failed to load WOTD:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { werd: wotd, loading, error };
}
