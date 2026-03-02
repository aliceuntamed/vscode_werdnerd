import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import PalettePlaygroundPage from "./pages/PalettePlayground/PalettePlaygroundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette-playground" element={<PalettePlaygroundPage />} />
      </Routes>
    </Router>
  );
}
