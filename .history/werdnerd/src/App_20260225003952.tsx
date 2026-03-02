import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import VaultHero from "./pages/Home/VaultHero";
import CuratedPicks from "./pages/Home/CuratedPicks";
import SpinTheVault from "./pages/Home/SpinTheVault";
import QuickBrowse from "./pages/Home/QuickBrowse";

function App() {
  return (
    <div className="App">
      <Navigation />
      <VaultHero />
      <CuratedPicks />
      <SpinTheVault />
      <QuickBrowse />
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    function getTodos() {
      const { data: todos } = await supabase.from("todos").select();

      if (todos.length > 1) {
        setTodos(todos);
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
export default Page;

export default App;
