import React from "react";
import Home from "../src/Pages/Home";
import NotFound from "../src/Pages/NotFound";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Router>
      </BrowserRouter>
    )
}