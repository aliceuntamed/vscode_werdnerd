import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingScreen from "./src/components/ui/LoadingScreen";

// Your existing pages
import HomePage from "./src/pages/Home/HomePage.tsx";
import VaultPage from "./src/pages/WerdVault/WerdVaultPage.tsx";
import AboutPage from "./src/pages/About/AboutPage.tsx";
import CreatorsPlaygroundPage from "./src/pages/CreatorsPlayground/CreatorsPlaygroundPage.tsx";
import SubmitWerdPage from "./src/pages/SubmitWerd/SubmitWerdPage.tsx";
import GamesPage from "./src/pages/Games/GamesPage.tsx";
import BogglePage from "./src/pages/Games/BogglePage.tsx";
// ...etc

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen blurBackground />}>
        <Routes>
          {/* Your handcrafted pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/creators-playground"
            element={<CreatorsPlaygroundPage />}
          />
          <Route path="/submit-werd" element={<SubmitWerdPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/boggle" element={<BogglePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
