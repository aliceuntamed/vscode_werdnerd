// pages/SubmitWord.tsx
import { useState } from "react";
import React from "react";
import { supabase } from "../../utils/supabase/client";

export default function SubmitWord() {
  const [werd, setWerd] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Insert werd
    const { data: newWerd, error } = await supabase
      .from("werds")
      .insert({ werd })
      .select()
      .single();

    if (error) throw error;

    // 2. Insert relational tags
    for (const tagName of selectedTags) {
      const { data: tag } = await supabase
        .from("tags")
        .select("tag_id")
        .eq("tag_name", tagName)
        .single();

      await supabase.from("werd_tags").insert({
        werd_id: newWerd.werd_id,
        tag_id: tag?.tag_id || "",
        werd: newWerd.werd,
        tag: tagName,
      });
    }

    setWerd("");
    setSelectedTags([]);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-20">
      <input
        value={werd}
        onChange={(e) => setWerd(e.target.value)}
        className="w-full p-3 rounded bg-white/10 border border-white/20"
        placeholder="Enter a new werd…"
      />

      {/* Tag selector UI goes here */}

      <button
        type="submit"
        className="mt-6 px-6 py-2 rounded bg-white/20 hover:bg-white/30"
      >
        Submit
      </button>
    </form>
  );
}
