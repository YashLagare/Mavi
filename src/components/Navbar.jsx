import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Fuel", href: "/fuel" },
    { name: "Insurance", href: "/insurance" },
    { name: "Finance", href: "/finance" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            
            <span className="font-bold text-2xl text-blue-800">Mavi's</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-300"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden bg-white rounded-b-lg shadow-lg mt-2"
            >
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium ${
                    link.name === "Fuel" ? "text-blue-800 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="block mt-2 mx-4 bg-blue-800 text-white px-4 py-2 rounded-lg text-center shadow hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
