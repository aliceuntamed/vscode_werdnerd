import { Button } from "../../components/ui/Button";
import { Flipwords } from "../../components/ui/flipwords";

export default function Hero() {
  return (
    <section className="relative w-full py-28 md:py-40 flex items-center justify-center bg-black overflow-hidden">
      {/* Cinematic vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c0c] to-black" />

      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <h1 className="font-heading text-4xl md:text-6xl tracking-tight bg-chrome-horizontal bg-clip-text text-transparent">
          A logophile's lexicon of{" "}
          <Flipwords
            werds={["unusual", "curious", "obscure", "intriguing"]}
            duration={3000}
            className="text-white"
          />{" "}
          werds.
        </h1>

        <p className="text-text-muted text-lg md:text-xl max-w-xl">
          Discover the delightfully polysyllabic, the obscure, and the
          curious—one werd at a time.
        </p>

        <Button>Start Exploring</Button>
      </div>
    </section>
  );
}
