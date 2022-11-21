import React, { useState } from "react";
import Home from "../src/Pages/Home";
import NotFound from "../src/Pages/NotFound";
import DataContext from "./contexts/data";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";

export default function App() {
  const [cardData, setCardData] = useState(null);
  return (
    <DataContext.Provider value={{ cardData, setCardData }}>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Router>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
