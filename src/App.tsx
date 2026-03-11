import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./Layout/MainLayout";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy load pages
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const WerdVaultPage = lazy(() => import("./pages/WerdVault/WerdVaultPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const PalettePlaygroundPage = lazy(
  () => import("./pages/PalettePlayground/PalettePlaygroundPage"),
);
const SubmitWerdPage = lazy(() => import("./pages/SubmitWerd/SubmitWerdPage"));
const GamesPage = lazy(() => import("./pages/Games/GamesPage"));

// Lazy load individual game pages
const BogglePage = lazy(() => import("./pages/Games/BogglePage"));
const WordlePage = lazy(() => import("./pages/Games/WordlePage"));
const WordSearchPage = lazy(() => import("./pages/Games/WordSearchPage"));
const TriviaPage = lazy(() => import("./pages/Games/TriviaPage"));
const HangmanPage = lazy(() => import("./pages/Games/HangmanPage"));
const BrainTeasersPage = lazy(() => import("./pages/Games/BrainTeasersPage"));
const CodenamesPage = lazy(() => import("./pages/Games/CodenamesPage"));

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
      <ErrorBoundary>
        <MainLayout>
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
              path="/werdvault"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <WerdVaultPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AboutPage />
                </Suspense>
              }
            />

            <Route
              path="/submit"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <SubmitWerdPage />
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

            {/* Individual Games */}
            <Route
              path="/games/boggle"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <BogglePage />
                </Suspense>
              }
            />

            <Route
              path="/games/wordle"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <WordlePage />
                </Suspense>
              }
            />

            <Route
              path="/games/wordsearch"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <WordSearchPage />
                </Suspense>
              }
            />

            <Route
              path="/games/trivia"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <TriviaPage />
                </Suspense>
              }
            />

            <Route
              path="/games/hangman"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <HangmanPage />
                </Suspense>
              }
            />

            <Route
              path="/games/brainteasers"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <BrainTeasersPage />
                </Suspense>
              }
            />

            <Route
              path="/games/codenames"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <CodenamesPage />
                </Suspense>
              }
            />
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </Router>
  );
}
