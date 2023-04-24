import React, { useState } from "react";
// import LaptopList from "./components/LaptopList";
// import BudgetSelector from "./components/BudgetSelector";
// import Filters from "./components/Filters.js";
import './App.css'
import {Routes, Route } from 'react-router-dom'
import IndexPage from "./pages/IndexPage";
import SellerRecommendation from "./components/SellerRecommendation";


function App() {

  return (
    <Routes>
      {/* All the App Content */}
      <Route path="/*" element={<IndexPage/>}></Route>
      <Route path="/buy/*" element={<SellerRecommendation/>}></Route>
    </Routes>
  );
}

export default App;