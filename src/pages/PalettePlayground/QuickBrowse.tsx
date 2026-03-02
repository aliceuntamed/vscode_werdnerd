import { WerdCard } from "../../components/werd/WerdCard";

const sampleWerds = [
  {
    werd: "Eccedentesiast",
    definition: "Someone who hides pain behind a smile.",
  },
  {
    werd: "Monachopsis",
    definition: "The subtle feeling of being out of place.",
  },
  {
    werd: "Petrichor",
    definition: "The pleasant, earthy smell after rain.",
  },
  {
    werd: "Vellichor",
    definition: "The strange wistfulness of used bookstores.",
  },
  {
    werd: "Limerence",
    definition: "The state of being infatuated with another person.",
  },
  {
    werd: "Sonorous",
    definition: "An imposingly deep and full sound.",
  },
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
            <WerdCard key={i} werd={item.werd} definition={item.definition} />
          ))}
        </div>
      </div>
    </section>
  );
}
