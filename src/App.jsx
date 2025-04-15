// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Creativity from "./pages/creativity";
import Professional from "./pages/Professional";
import Twitch from "./pages/twitch";
import Music from "./pages/music";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creativity" element={<Creativity />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/twitch" element={<Twitch />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
