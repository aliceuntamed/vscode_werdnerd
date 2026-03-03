import VaultHero from "./VaultHero";
import QuickBrowse from "../../components/shared/QuickBrowse";
import SpinTheVault from "../../components/shared/SpinTheVault";
import ContributeCTA from "../../components/ContributeCTA";

export default function WordVaultPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <section className="pt-20 pb-16">
        <VaultHero />
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <QuickBrowse />
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <SpinTheVault />
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <ContributeCTA />
        </div>
      </section>
    </main>
  );
}
