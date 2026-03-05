import { Flipwerds } from "../../components/ui/flipwords";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,200,255,0.15),_rgba(10,10,10,0.95))]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl tracking-tight bg-chrome-horizontal bg-clip-text text-transparent">
          A logophile’s lexicon of{" "}
          <Flipwerds
            werds={["unusual", "curious", "obscure", "intriguing"]}
            duration={3000}
            className="text-white"
          />{" "}
          words.
        </h1>

        <p className="font-body text-white/60 text-lg mt-6 max-w-xl mx-auto">
          Discover rare, poetic, and peculiar vocabulary curated for word
          lovers.
        </p>
      </div>
    </section>
  );
}
