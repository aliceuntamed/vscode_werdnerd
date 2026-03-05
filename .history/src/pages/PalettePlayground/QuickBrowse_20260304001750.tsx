import { WerdCard } from "../../components/werd/WerdCard";

const sampleWerds = [
  {
    word: "Eccedentesiast",
    pronunciation: "ek-si-den-tee-see-ast",
    partOfSpeech: "noun",
    definition: "Someone who hides pain behind a smile.",
    tags: ["psychological", "emotional"],
  },
  {
    word: "Monachopsis",
    pronunciation: "mon-ak-op-sis",
    partOfSpeech: "noun",
    definition: "The subtle feeling of being out of place.",
    tags: ["emotional", "existential"],
  },
  {
    word: "Petrichor",
    pronunciation: "PET-ri-kor",
    partOfSpeech: "noun",
    definition: "The pleasant, earthy smell after rain.",
    tags: ["sensory", "nature"],
  },
  {
    word: "Vellichor",
    pronunciation: "VEL-i-kor",
    partOfSpeech: "noun",
    definition: "The strange wistfulness of used bookstores.",
    tags: ["neologism", "poetic", "literary"],
  },
  {
    word: "Limerence",
    pronunciation: "LIM-er-ence",
    partOfSpeech: "noun",
    definition: "The state of being infatuated with another person.",
    tags: ["psychological", "modern", "romantic"],
  },
  {
    word: "Sonorous",
    pronunciation: "SON-uh-rus",
    partOfSpeech: "adjective",
    definition: "An imposingly deep and full sound.",
    tags: ["auditory", "descriptive"],
  },
];

const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
];

export function QuickBrowse() {
  return (
    <section className="px-6 py-20 bg-bg-main text-text-primary">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h2 className="font-heading text-4xl bg-chrome-horizontal bg-clip-text text-transparent tracking-tight">
          QuickBrowse
        </h2>

        <p className="text-text-muted text-lg">
          A fast peek into the Werd Vault.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleWerds.map((item, i) => (
            <WerdCard
              key={i}
              word={item.word}
              pronunciation={item.pronunciation}
              partOfSpeech={item.partOfSpeech}
              definition={item.definition}
              gradient={gradients[i % gradients.length]}
              index={i}
              isFavorite={false}
              onToggleFavorite={() => {}}
              onSpeak={() => {}}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
