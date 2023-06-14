import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
//components
import LandingPage from "./components/Views/LandingPage/LandingPage";
import Home from "./components/Views/Home/Home";
import ProjectDetail from "./components/Views/ProjectDetail/ProjectDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projectDetail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
