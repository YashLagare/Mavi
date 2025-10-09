import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FinancePage from "./pages/FinancePage";
import FuelPage from "./pages/FuelPage";
import InsurancePage from "./pages/InsurancePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
     
     

      <Routes>
         <Route path="/" element={<Home/>} />
        <Route path="/services/finance" element={<FinancePage />} />

        <Route path="/services/fuel" element={<FuelPage />} />
        <Route path="/services/insurance" element={<InsurancePage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
