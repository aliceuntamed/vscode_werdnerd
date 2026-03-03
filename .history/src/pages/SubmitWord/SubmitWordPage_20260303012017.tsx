import SubmitWordForm from "./SubmitWordForm";

export default function SubmitWordPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="font-heading text-4xl md:text-5xl mb-4 bg-chrome-horizontal bg-clip-text text-transparent">
          Submit a Word
        </h1>

        <p className="text-white/60 mb-12 font-body max-w-xl">
          Add a new entry to the archive. Every submission helps expand the
          vault.
        </p>

        <SubmitWordForm />
      </div>
    </main>
if (submitted) {
  return (
    <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#e5e7eb] via-[#9bbcff] to-[#c084fc] shadow-[0_0_25px_rgba(155,188,255,0.25)]">
      <div className="rounded-2xl bg-black/60 backdrop-blur-sm p-10 text-center space-y-6">
        <h2 className="font-heading text-3xl text-white">
          Word Submitted
        </h2>

        <p className="text-white/70 font-body">
          Your contribution has been added to the vault.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

          {/* Add another */}
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 rounded-lg font-heading bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
          >
            Add Another
          </button>

          {/* Return to Vault */}
          <a
            href="/vault"
            className="px-6 py-3 rounded-lg font-heading bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            Return to Vault
          </a>

        </div>
      </div>
    </div>
  );
}