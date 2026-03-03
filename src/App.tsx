import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const PalettePlaygroundPage = lazy(
  () => import("./pages/PalettePlayground/PalettePlaygroundPage"),
);
const SubmitWordPage = lazy(() => import("./pages/SubmitWord/SubmitWordPage"));
const GamesPage = lazy(() => import("./pages/Games/GamesPage"));

// Loading component for lazy routes
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/palette-playground"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PalettePlaygroundPage />
            </Suspense>
          }
        />
        <Route
          path="/submit"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SubmitWordPage />
            </Suspense>
          }
        />
        <Route
          path="/games"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GamesPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
