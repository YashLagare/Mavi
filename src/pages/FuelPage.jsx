import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Fuel from "../assets/fuel.jpg";
import mavi from "../assets/mavi.png";
import mavigroup from "../assets/mavigroup.jpg"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import pump from "../assets/pump.jpg"
const fuelCategories = [
  { title: "Diesel Exhaust Fluid (DEF)", desc: "Learn how Diesel Exhaust Fluid reduces emissions and keeps your engines running clean.", icon: "fa-droplet" },
  { title: "Coolants", desc: "Discover the importance of coolants in maintaining optimal engine temperature and performance.", icon: "fa-temperature-high" },
  { title: "Oil", desc: "High-quality oils help reduce engine wear, improve efficiency, and extend vehicle life.", icon: "fa-oil-can" },
  { title: "Fuel, Oil & Coolant Additives", desc: "Enhance your fuel and oil performance with additives for smoother operation and cleaner engines.", icon: "fa-flask" },
  { title: "Health & Safety", desc: "Ensure workplace safety and proper handling of fuels and chemicals with health & safety measures.", icon: "fa-shield-alt" },
  { title: "Seals", desc: "Durable seals prevent leaks and protect your machinery from wear and damage.", icon: "fa-cogs" },
  { title: "Office Supplies", desc: "Get the essential office supplies for your fleet management and operational needs.", icon: "fa-briefcase" },
  { title: "Kleen Flo Brake Cleaner", desc: "Powerful brake cleaner for maintaining safety and performance of your braking systems.", icon: "fa-bolt" },
];

const sectionIds = {
  Home: "home",
  About: "About",
  Products: "products",
  Contact: "contact",
};

const FuelPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  const menuLinks = ["Home", "About", "Products", "Contact"];

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = (sectionName) => {
    const id = sectionIds[sectionName];
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              {/* <span className="font-bold text-2xl text-blue-800">Mavi's</span> */}
             <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img
                  src={mavigroup}
            alt="Mavi's Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleScroll(link)}
                  className="text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium"
                >
                  {link}
                </button>
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
                  <button
                    key={link}
                    onClick={() => handleScroll(link)}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium"
                  >
                    {link}
                  </button>
                ))}
                
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        id="home"
        className="relative text-white h-[750px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img src={Fuel} alt="Fuel" className="absolute inset-0 w-full h-full object-cover blur-xs" />
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="relative"
        id="About"
      >
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={cardVariants} className="bg-opacity-90 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ABOUT MAVI FUEL</h2>
            <p className="text-gray-600 mb-4">
              Mavi fuel is your one-stop shop for all types of customers and industries. Mavi fuel was started with a thought of saving time for everyone. Inventory management and collecting products from various places takes a major portion of time for companies. This is where we come in. <br/> <br/> We offer your choice of products with high level of quality at economical prices and excellent service.
Online Orders can be either picked up from our warehouse or we can arrange delivery.
            </p>
            <a
              href="http://mavifinancial.21gfox.ca/index.php"
              className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 inline-block"
            >
              More Details
            </a>
          </motion.div>
          <motion.div variants={cardVariants} className="rounded-2xl p-8">
            <img
              src={pump}
              alt="pump image"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        ref={categoriesRef}
        initial="hidden"
        animate={categoriesInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="py-10"
        id="products"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fuel & Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fuelCategories.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="bg-[#b2d2e9] w-20 h-20 flex items-center justify-center rounded-full mb-4">
                  <i className={`fas ${item.icon} text-[#006cb7] text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
     <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <img src={mavi} alt="Company Logo" className="mb-8 w-36 h-auto" />
            <p className="text-gray-400">
             Mavi Fuel provides high-quality, economical fuel and products with convenient online ordering, pickup, and delivery for all customers and industries.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScroll(link)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Top Products</h4>
            <ul className="space-y-2">
              {["Diesel Exhaust Fluid", "Health & Safety", "Coolants", "Oil", "Fuel"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
  <h4 className="text-lg font-semibold mb-4 p-1 relative left-10 ">Contact Us</h4>
  <address className="text-gray-400 not-italic space-y-2 text-sm m-5">
    <p className="flex items-center gap-4 p-1">
      <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />
      100 Rutherford Rd. S Unit# 1D, Brampton, ON L6W 3J5
    </p>
    <p className="flex items-center gap-4 p-1">
      <FaPhoneAlt className="w-5 h-5 text-blue-500" />
      416-316-3100
    </p>
    <p className="flex items-center gap-4 p-1">
      <FaEnvelope className="w-5 h-5 text-blue-500" />
      info@mavifuel.com
    </p>
    <p className="flex items-center gap-4 p-1">
      <span className="w-5 h-5"></span> {/* Empty icon space for alignment */}
      Mon-Fri 9 AM to 5 PM
    </p>
  </address>
</div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm relative left-35">Mavi Fuel Corporation© 2025 All Rights Reserved. </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors relative right-[280px]">
                <i className={`fab fa-${icon} text-blue-500`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>


    </div>
  );
};

export default FuelPage;
