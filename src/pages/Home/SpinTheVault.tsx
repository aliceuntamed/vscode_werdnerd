import { useState } from "react";
import { Shuffle } from "lucide-react";
import { WerdCard } from "../../components/werd/WerdCard";
import { getRandomWerd } from "../../utils/supabase/queries";
import type { Werd } from "../../types/types";

export default function SpinTheVault() {
  const [werd, setWerd] = useState<Werd | null>(null);
  const [loading, setLoading] = useState(false);

  async function spin() {
    setLoading(true);
    const random = await getRandomWerd();
    setWerd(random);
    setLoading(false);
  }

  return (
    <div className="rounded-xl p-8 bg-[#0b0b0d] border border-white/10 shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl text-white">Spin the Vault</h2>

        <button
          onClick={spin}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white border border-white/20"
        >
          <Shuffle className="w-4 h-4" />
          {loading ? "Spinning…" : "Spin"}
        </button>
      </div>

      {werd ? (
        <WerdCard {...werd} showPartOfSpeech showDefinition />
      ) : (
        <p className="text-white/50 italic">Spin to reveal a word.</p>
      )}
    </div>
  );
}
