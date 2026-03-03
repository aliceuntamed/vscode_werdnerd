import { useState } from "react";
import { supabase } from "../../utils/supabase/client";
import { WerdCard } from "../werd/WordCard";
import { Shuffle } from "lucide-react";

export default function SpinTheVault() {
  const [werd, setWerd] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function spin() {
    setLoading(true);

    const { data, error } = await supabase
      .from("werds")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data.length > 0) {
      const random = data[Math.floor(Math.random() * data.length)];
      setWerd(random);
    }

    setLoading(false);
  }

  return (
    <div
      className="
        rounded-xl p-8 bg-[#0b0b0d]
        border border-white/10
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl text-white tracking-tight">
          Spin the Vault
        </h2>

        <button
          onClick={spin}
          disabled={loading}
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg
            bg-white/10 border border-white/20 text-white
            hover:bg-white/20 transition font-heading text-sm
            disabled:opacity-40
          "
        >
          <Shuffle className="w-4 h-4" />
          {loading ? "Spinning…" : "Spin"}
        </button>
      </div>

      {/* Chrome accent */}
      <div
        className="
          h-[3px] w-1/2 rounded-full mb-8
          bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc]
          opacity-70
        "
      />

      {/* Result */}
      {werd ? (
        <WerdCard
          word={werd.word}
          pronunciation={werd.pronunciation}
          partOfSpeech={werd.partOfSpeech}
          meaning={werd.meaning}
          funfact={werd.funfact}
          source={werd.source}
          tags={werd.tags}
        />
      ) : (
        <p className="font-body text-white/50 italic">
          Spin the vault to reveal a random word.
        </p>
      )}
    </div>
  );
}
