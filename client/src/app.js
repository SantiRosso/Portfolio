import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
//components
import Home from "./components/Views/Home/Home";
import ProjectDetail from "./components/Views/ProjectDetail/ProjectDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectDetail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
