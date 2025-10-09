import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FinancePage from "./pages/FinancePage";
import FuelPage from "./pages/FuelPage";
import InsurancePage from "./pages/InsurancePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     
     

      <Routes>
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/fuel" element={<FuelPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
