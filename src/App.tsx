import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { BuilderComponent } from "@builder.io/react";
import LoadingScreen from "./components/ui/LoadingScreen";

// Builder content component for visual editing
function BuilderPage() {
  const location = useLocation();
  const path = location.pathname === "/" ? "home" : location.pathname.slice(1);

  return (
    <BuilderComponent model="page" name={path} />
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen blurBackground />}>
        <Routes>
          <Route path="/" element={<BuilderPage />} />
          <Route path="/creators-playground" element={<BuilderPage />} />
          <Route path="/submit" element={<BuilderPage />} />
          <Route path="/games" element={<BuilderPage />} />
          <Route path="/games/boggle" element={<BuilderPage />} />
          <Route path="/games/wordle" element={<BuilderPage />} />
          <Route path="/games/wordsearch" element={<BuilderPage />} />
          <Route path="/games/trivia" element={<BuilderPage />} />
          <Route path="/games/hangman" element={<BuilderPage />} />
          <Route path="/games/brainteasers" element={<BuilderPage />} />
          <Route path="/games/codenames" element={<BuilderPage />} />
          {/* Catch-all route for Builder pages */}
          <Route path="*" element={<BuilderPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
