export function Card({ children }) {
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-card p-5 shadow-soft-elevated transition-transform duration-200 ease-in-out hover:scale-[1.02]">
      {children}
    </div>
  );
}
