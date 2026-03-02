import { useEffect, useState } from "react";
import { getCuratedWerds } from "../utils/supabase/queries/curated";

export function useCuratedPicks() {
  const [werds, setwerds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getCuratedWerds();
        setwerds(data);
      } catch (err) {
        console.error("Failed to load curated picks:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { werds, loading };
}
