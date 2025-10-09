import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function PlaceholderService({ name }) {
  return (
    <div className="flex items-center justify-center h-screen text-3xl font-semibold text-blue-700">
      {name} Service Page Placeholder
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="font-sans bg-white text-gray-800">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/services/fuel" element={<PlaceholderService name="Fuel" />} />
        <Route path="/services/insurance" element={<PlaceholderService name="Insurance" />} />
        <Route path="/services/finance" element={<PlaceholderService name="Finance" />} />
      </Routes>
    </div>
  );
}
