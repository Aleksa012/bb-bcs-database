import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Characters from "./components/Characters";
import About from "./components/About";

import "./globals.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
