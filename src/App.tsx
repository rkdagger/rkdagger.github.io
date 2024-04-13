import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  console.log("Last deployed at: " + Date.now());
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
