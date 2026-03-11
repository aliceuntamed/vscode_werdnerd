import { useEffect, useState } from "react";
import { WerdCard } from "../../components/werd/WerdCard";
import { getWOTD } from "../../utils/supabase/queries";
import type { Werd } from "../../types/werd";

export default function WOTD() {
  const [werd, setWerd] = useState<Werd | null>(null);

  useEffect(() => {
    getWOTD().then(setWerd);
  }, []);

  if (!werd) {
    return <p className="text-white/50 italic">Loading word of the day…</p>;
  }

  return (
    <WerdCard {...werd} showPronunciation showPartOfSpeech showDefinition />
  );
}
