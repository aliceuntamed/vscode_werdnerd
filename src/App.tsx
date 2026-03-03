import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import HomePage from "./pages/Home/HomePage";
import PalettePlaygroundPage from "./pages/PalettePlayground/PalettePlaygroundPage";
import SubmitWordPage from "./pages/SubmitWord/SubmitWordPage";
import GamesPage from "./pages/Games/GamesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette-playground" element={<PalettePlaygroundPage />} />
        <Route path="/submit" element={<SubmitWordPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
