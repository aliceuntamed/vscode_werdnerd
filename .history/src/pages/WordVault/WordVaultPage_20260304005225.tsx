import { useState } from "react";
import { WordVaultTagCloud } from "./WordVaultTagCloud";
import { WerdCard } from "../../components/werd/WerdCard";
import { Werd } from "../../types/Werd";

interface WordVaultProps {
  allTags: string[];
  words: Werd[];
}

export default function WordVault({ allTags, words }: WordVaultProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? words.filter((w) => w.tags.includes(activeTag))
    : words;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl text-white tracking-tight mb-10">
        Word Vault
      </h1>

      <div className="mb-12">
        <WordVaultTagCloud
          tags={allTags}
          activeTag={activeTag}
          onSelect={(tag) =>
            setActiveTag((prev) => (prev === tag ? null : tag))
          }
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((werd) => (
          <WerdCard key={werd.id} {...werd} />
        ))}
      </div>
    </div>
  );
}
