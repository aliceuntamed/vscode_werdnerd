import { ChromeCubeStack } from "@/components/ui/ChromeCubeStack";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0d] text-white">
      {/* Optional cinematic background */}
      {/* <ChromeSky className="absolute inset-0 -z-10 opacity-40" /> */}

      <Header />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20">
        <ChromeCubeStack scale={1.6} className="mb-16" />

        <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-center mb-6">
          About Stephanie
        </h1>

        <p className="font-body text-white/70 max-w-2xl text-center leading-relaxed px-6">
          I’m a creative technologist and designer who builds modular,
          chrome‑cinematic systems with expressive precision. I architect
          tactile artifacts, playful interfaces, and cohesive ecosystems that
          blend engineering clarity with aesthetic intention.
        </p>
      </section>

      {/* BODY CONTENT */}
      <section className="relative max-w-4xl mx-auto px-6 pb-32 space-y-16">
        <div>
          <h2 className="font-heading text-2xl mb-4">What I Build</h2>
          <p className="font-body text-white/70 leading-relaxed">
            I design and engineer modular UI systems, chrome‑accented
            components, expressive game mechanics, and cohesive visual
            languages. My work blends precision, play, and cinematic motion.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl mb-4">How I Think</h2>
          <p className="font-body text-white/70 leading-relaxed">
            I approach every project as a system — a constellation of
            interconnected parts that must feel intentional, tactile, and
            unified. I value clarity, polish, and expressive cohesion.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl mb-4">What Drives Me</h2>
          <p className="font-body text-white/70 leading-relaxed">
            I’m energized by building experiences that feel alive — from
            chrome‑lit artifacts to playful puzzles to cinematic interfaces.
            Every detail matters, and every interaction should feel crafted.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
