import GamesHero from "./GamesHero";
import GameCard from "./GameCard";
import { games } from "./gamesData";

export default function GamesPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <GamesHero />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((g) => (
            <GameCard key={g.id} title={g.title} description={g.description} />
          ))}
        </div>
      </section>
    </main>
  );
}
