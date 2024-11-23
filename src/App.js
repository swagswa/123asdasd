import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePageLuckyJet from "./pages/GamePageLuckyJet";
import GamePageJetX from "./pages/GamePageJetX";
import GamePageRocketQueen from "./pages/GamePageRocketQueen";
import GamePageSpaceX from "./pages/GamePageSpaceX";
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game1" element={<GamePageLuckyJet title="Game 1" />} />
        <Route path="/game2" element={<GamePageJetX title="Game 2" />} />
        <Route path="/game3" element={<GamePageRocketQueen title="Game 3" />} />
        <Route path="/game4" element={<GamePageSpaceX title="Game 4" />} />

      </Routes>
    </Router>
  );
};

export default App;