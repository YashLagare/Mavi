import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FinancePage from "./FinancePage";
import FuelPage from "./FuelPage";
import InsurancePage from "./InsurancePage";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white flex justify-center gap-8">
        <Link to="/finance" className="hover:underline">Finance</Link>
        <Link to="/fuel" className="hover:underline">Fuel</Link>
        <Link to="/insurance" className="hover:underline">Insurance</Link>
      </nav>

      <Routes>
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/fuel" element={<FuelPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
