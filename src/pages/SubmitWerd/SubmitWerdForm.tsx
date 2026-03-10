import React, { useState } from "react";
import { supabase } from "../../utils/supabase/client";

export default function SubmitWordForm() {
  const [word, setWord] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [meaning, setMeaning] = useState("");
  const [tags, setTags] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const tagArray = tags
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const { error } = await supabase.from("werds").insert({
      word,
      pronunciation,
      meaning,
      tags: tagArray,
    });

    setLoading(false);

    if (!error) {
      setSubmitted(true);
      setWord("");
      setPronunciation("");
      setMeaning("");
      setTags("");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] shadow-[0_0_25px_rgba(155,188,255,0.25)]">
        <div className="rounded-2xl bg-black/60 backdrop-blur-sm p-10 text-center space-y-6">
          <h2 className="font-heading text-3xl text-white">Word Submitted</h2>

          <p className="text-white/70 font-body">
            Your contribution has been added to the vault.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-lg font-heading bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            >
              Add Another
            </button>

            <a
              href="/vault"
              className="px-6 py-3 rounded-lg font-heading bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              Return to Vault
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-[2px] bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] shadow-[0_0_25px_rgba(155,188,255,0.25)]"
    >
      <div className="rounded-2xl bg-black/60 backdrop-blur-sm p-10 space-y-6">
        <div>
          <label className="block mb-2 text-white/80 font-heading">Word</label>
          <input
            required
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:bg-white/10"
            placeholder="e.g., Petrichor"
          />
        </div>

        <div>
          <label className="block mb-2 text-white/80 font-heading">
            Pronunciation
          </label>
          <input
            value={pronunciation}
            onChange={(e) => setPronunciation(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:bg-white/10"
            placeholder="e.g., PET-ri-kor"
          />
        </div>

        <div>
          <label className="block mb-2 text-white/80 font-heading">
            Meaning
          </label>
          <textarea
            required
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:bg-white/10 h-32"
            placeholder="Describe the meaning of the word..."
          />
        </div>

        <div>
          <label className="block mb-2 text-white/80 font-heading">
            Tags (comma‑separated)
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:bg-white/10"
            placeholder="e.g., sensory, poetic, greek"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-heading text-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition disabled:opacity-40"
        >
          {loading ? "Submitting..." : "Submit Word"}
        </button>
      </div>
    </form>
  );
}
