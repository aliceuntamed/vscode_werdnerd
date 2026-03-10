import { useEffect, useState } from "react";
import { WerdCard } from "../../components/werd/WerdCard";
import { getWOTD } from "../../utils/supabase/queries/werds";

export function WOTD() {
  const [werd, setWerd] = useState(null);

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
