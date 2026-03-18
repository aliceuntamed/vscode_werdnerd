import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";

// Lazy pages
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CreatorsPlaygroundPage = lazy(() =>
  import("./pages/CreatorsPlayground/CreatorsPlaygroundPage")
);
const SubmitWerdPage = lazy(() =>
  import("./pages/SubmitWerd/SubmitWerdPage")
);
const GamesPage = lazy(() => import("./pages/Games/GamesPage"));

// Game pages
const BogglePage = lazy(() =>
  import("./pages/GamePages/BogglePage/BogglePage")
);
const WordlePage = lazy(() =>
  import("./pages/GamePages/WordlePage/WordlePage")
);
const WordSearchPage = lazy(() =>
  import("./pages/GamePages/WordSearchPage/WordSearchPage")
);
const TriviaPage = lazy(() =>
  import("./pages/GamePages/TriviaPage/TriviaPage")
);
const HangmanPage = lazy(() =>
  import("./pages/GamePages/HangmanPage/HangmanPage")
);
const BrainTeasersPage = lazy(() =>
  import("./pages/GamePages/BrainTeasersPage/BrainTeasersPage")
);
const CodenamesPage = lazy(() =>
  import("./pages/GamePages/CodenamesPage/CodenamesPage")
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen blurBackground />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/creators-playground"
            element={<CreatorsPlaygroundPage />}
          />
          <Route path="/submit" element={<SubmitWerdPage />} />
          <Route path="/games" element={<GamesPage />} />

          {/* Game pages */}
          <Route path="/games/boggle" element={<BogglePage />} />
          <Route path="/games/wordle" element={<WordlePage />} />
          <Route path="/games/wordsearch" element={<WordSearchPage />} />
          <Route path="/games/trivia" element={<TriviaPage />} />
          <Route path="/games/hangman" element={<HangmanPage />} />
          <Route path="/games/brainteasers" element={<BrainTeasersPage />} />
          <Route path="/games/codenames" element={<CodenamesPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
