import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center">
      <nav className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
            />
          </svg>
          <span className="font-heading text-xl text-white">WerdNerd</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={
              isActive("/")
                ? "text-white transition"
                : "text-white/60 hover:bg-chrome-horizontal hover:bg-clip-text hover:text-transparent transition"
            }
          >
            Home
          </Link>

          <Link
            to="/vault"
            className={
              isActive("/vault")
                ? "text-white transition"
                : "text-white/60 hover:bg-chrome-horizontal hover:bg-clip-text hover:text-transparent transition"
            }
          >
            werd Vault
          </Link>

          <Link
            to="/vault"
            className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Explore werds
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link to="/" className="text-white text-lg">
              Home
            </Link>
            <Link to="/vault" className="text-white text-lg">
              werd Vault
            </Link>

            <Link
              to="/vault"
              className="mt-4 px-4 py-3 rounded-md bg-white text-black text-center font-medium"
            >
              Explore werds
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
