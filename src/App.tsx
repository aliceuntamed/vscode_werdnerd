import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import PalettePlaygroundPage from "./pages/PalettePlayground/PalettePlaygroundPage";
import SubmitWordPage from "./pages/SubmitWord/SubmitWordPage";
import GamesPage from "./pages/Games/GamesPage";
const HomeRoute = (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/palette-playground" element={<PalettePlaygroundPage />} />
        <Route path="/submit" element={<SubmitWordPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
      <Routes>
        <Route path="/submit" element={<SubmitWordPage />} />
      </Routes>
    </Router>
  );
  const GamesRoute = (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
