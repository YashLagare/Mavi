import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaBars,
  FaBuilding, FaCheckCircle, FaEnvelope, FaHandHoldingUsd, FaHeartbeat, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaTruck, FaUserTie
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import mavigroup from "../assets/mavigroup.jpg";
import insurance from "/demo.jpg";
import { Link } from "react-router-dom";

const insuranceProducts = [
  { icon: <FaBuilding className="text-blue-800 text-3xl" />, title: "Business Property", desc: "Protect your physical assets including offices, equipment, and inventory." },
  { icon: <FaUserTie className="text-blue-800 text-3xl" />, title: "Liability Coverage", desc: "Coverage against claims for damages or injuries caused to third parties." },
  { icon: <FaTruck className="text-blue-800 text-3xl" />, title: "Commercial Auto", desc: "Insurance for company vehicles, trucks, and delivery fleets." },
  { icon: <FaHeartbeat className="text-blue-800 text-3xl" />, title: "Workers' Compensation", desc: "Protect employees with coverage for work-related injuries or illnesses." },
  { icon: <FaShieldAlt className="text-blue-800 text-3xl" />, title: "Cyber Liability", desc: "Protect your business from data breaches, cyberattacks, and online threats." },
  { icon: <FaHandHoldingUsd className="text-blue-800 text-3xl" />, title: "Business Interruption", desc: "Coverage for lost income and extra expenses due to unexpected business interruptions." },
];

const menuLinks = ["Home", "About", "Services", "Contact"];

const InsurancePage = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      const yOffset = -80; // navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Link to="/">

              <img src={mavigroup} alt="Mavi Logo" className="h-12 w-auto object-contain" />
              
              </Link>
              
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuLinks.map((link) => (
                <button key={link} onClick={() => handleScroll(link)} className="text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium">
                  {link}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-blue-800 transition-colors duration-300">
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial="hidden" animate="visible" exit="hidden" variants={mobileMenuVariants} className="md:hidden overflow-hidden bg-white rounded-b-lg shadow-lg mt-2">
                {menuLinks.map((link) => (
                  <button key={link} onClick={() => handleScroll(link)} className="block py-3 px-4 text-gray-700 hover:text-blue-800 transition-colors duration-300 font-medium">
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
        className="relative text-white h-[750px] overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img src={insurance} alt="Insurance" className="absolute inset-0 w-full h-full object-cover blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: -30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-bold mb-4">
              Insurance Protection
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.3 }} className="text-xl max-w-3xl mx-auto text-gray-100">
              <b>Protect your business, employees, and assets with comprehensive insurance solutions tailored for you.</b>
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="about" className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
          <img
            src="/1.jpg"
            alt="insurance"
            className="h-full w-full"
          />
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Mavi's Insurance</h2>
          <p className="text-gray-600 mb-6">
            Safeguard your business with insurance plans designed for your unique needs. Coverage includes property, liability, employee protection, and more.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Customized coverage for your business type",
              "Quick and transparent claims process",
              "Affordable and flexible payment plans",
              "Expert risk management advice",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-blue-800 mt-1 mr-3" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </section>
      {/* Extra Info Cards Section */}
      <section className=" px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-gray-700">
            We provide insurance solutions tailored to your business, with quick claims, expert advice, and flexible plans to protect your employees and assets.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
          <p className="text-gray-700">
            Our team of insurance experts is ready to guide you, ensuring that your coverage is comprehensive, affordable, and perfectly suited to your business needs.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4">Tips for Business Insurance</h3>
          <p className="text-gray-700">
            Regularly review your coverage to ensure it matches your current business size, operations, and risk exposure. Keep your assets and employees protected at all times.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4">Additional Coverage Options</h3>
          <p className="text-gray-700">
            Explore add-ons like cyber insurance, equipment breakdown, and business interruption coverage to strengthen your protection and minimize potential losses.
          </p>
        </div>
      </section>

      {/* Insurance Products Section */}
      <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Insurance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <div className="flex flex-col items-start">
            <img src={mavi} alt="Company Logo" className="mb-8 w-36 h-auto" />
            <p className="text-gray-400">
              Mavi Insurance offers a wide range of trusted and affordable insurance plans with convenient online services, personalized coverage options, and 24/7 support for all your protection needs.
            </p>
          </div> */}
          <div className="flex flex-col items-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" className="mb-8 w-36 h-auto">
              {/* White background */}
              <rect width="200" height="70" fill="white" />

              {/* Outer dark border */}
              <rect x="4" y="4" width="192" height="62" fill="none" stroke="#2c3e50" strokeWidth="3" />

              {/* Inner border */}
              <rect x="8" y="8" width="184" height="54" fill="none" stroke="#0066B3" strokeWidth="1.5" />

              {/* Blue header section */}
              <rect x="10.5" y="10.5" width="179" height="28" fill="#0066B3" />

              {/* Mavi's text in white with better styling */}
              <text x="100" y="30" fontFamily="Arial Black, Arial, sans-serif" fontSize="22" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="0.5">Mavi's</text>

              {/* Bottom white section */}
              <rect x="10.5" y="38.5" width="179" height="23" fill="white" />

              {/* Bottom text with better tracking */}
              <text x="100" y="53" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#0066B3" textAnchor="middle" letterSpacing="1.2">MAVI INSURANCE</text>
            </svg>

            <p className="text-gray-400">
              Mavi Insurance offers a wide range of trusted and affordable insurance plans with convenient online services, personalized coverage options, and 24/7 support for all your protection needs.
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
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Business Property", "Liability Coverage", "Commercial Auto", "Workers' Compensation", "Cyber Liability"].map((item, index) => (
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
                info@maviinsurance.com
              </p>
              {/* <p className="flex items-center gap-4 p-1">
            <span className="w-5 h-5"></span>
            Mon-Fri 9 AM to 5 PM
          </p> */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Hours: Mon-Fri 9AM-6PM</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm relative left-35">Mavi Insurance Corporation© 2025 All Rights Reserved. </p>
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

export default InsurancePage;
