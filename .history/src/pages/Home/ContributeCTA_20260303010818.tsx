import { Link } from "react-router-dom";

export default function ContributeCTA() {
  return (
    <div
      className="
        rounded-xl p-10 bg-[#0b0b0d]
        border border-white/10
        shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.55)]
        transition-shadow text-center
      "
    >
      {/* Chrome accent */}
      <div
        className="
          h-[3px] w-1/2 mx-auto rounded-full mb-8
          bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc]
          opacity-70
        "
      />

      <h2 className="font-heading text-3xl text-white tracking-tight mb-4">
        Contribute to the Vault
      </h2>

      <p className="font-body text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
        Know a rare, poetic, or peculiar word that deserves a place in the
        archive? Add it to the vault and help expand the lexicon.
      </p>

      <Link
        to="/submit"
        className="
          inline-block px-6 py-3 rounded-lg font-heading text-lg text-white
          border border-white/20 shadow-sm
          transition
        "
        style={{
          background: "linear-gradient(135deg, #e5e7eb, #9bbcff, #c084fc)",
        }}
      >
        Submit a Word
      </Link>
    </div>
  );
}
