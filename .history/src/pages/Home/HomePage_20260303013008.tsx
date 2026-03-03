import Hero from "./Hero";
import WOTD from "../../components/werd/WOTD";
import CuratedPicks from "../../components/shared/CuratedPicks";
import SpinTheVault from "../../components/shared/SpinTheVault";
import ContributeCTA from "../../components/ContributeCTA";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      {/* Hero with FlipWords */}
      <section className="pt-20 pb-24">
        <Hero />
      </section>

      {/* Word of the Day */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <WOTD />
        </div>
      </section>

      {/* Curated Picks */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <CuratedPicks />
        </div>
      </section>

      {/* Spin the Vault */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <SpinTheVault />
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <ContributeCTA />
        </div>
      </section>
    </main>
  );
}
