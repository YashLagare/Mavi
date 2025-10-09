import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import finance from "../assets/finace.jpg";
import finance2 from "../assets/finance2.jpg"
import mavigroup from "../assets/mavigroup.jpg";
import Equipment from "../assets/EquipmentRefinance.jpg"
import mavi from "../assets/mavifinancial-logofooter.jpg";
import Financing from "../assets/Financing.jpg";
import fact from "../assets/fact.jpg";
import EqFinance from "../assets/EqFinance.png";
import EqLeaseAndLoans from "../assets/EqLease&Loan.png";
import EqLiOCredit from "../assets/EqLiOCredit.png";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const financialServices = [
  {
    title: "Equipment Financing",
    image: EqFinance,
    content: [
      "At Mavi’s Financial, we understand that having the right equipment is essential for running and growing a successful business. Our Equipment Financing service is designed to help businesses acquire the tools, machinery, or vehicles they need without putting a strain on their cash reserves. Instead of large upfront costs, we offer flexible financing options that make it easier for you to invest in your operations while keeping your working capital intact.",
      "With our tailored financing plans, you can choose terms that best fit your budget and growth goals. Whether you are a small business upgrading to modern equipment or a growing company looking to expand, Mavi’s Financial ensures that you get quick approvals, competitive rates, and repayment schedules suited to your needs.",
      "By partnering with Mavi’s Financial for your equipment financing needs, you gain more than just funding—you gain a reliable partner committed to your success.",
    ],
  },
  {
    title: "Equipment Lease & Loan",
    image: EqLeaseAndLoans,
    content: [
      "At Mavi’s Financial, we provide flexible Equipment Lease & Loan solutions to help businesses access the machinery, vehicles, or technology they need without heavy upfront costs.",
      "Our leasing options allow you to use the latest equipment with low monthly payments and the ability to upgrade when needed, while our loan options give you full ownership over time with competitive rates and manageable installments.",
      "With Mavi’s Financial Equipment Lease & Loan, you gain access to fast approvals, personalized terms, and a partner that understands your growth journey.",
    ],
  },
  {
    title: "Equipment Refinance",
    image: Equipment,
    content: [
      "At Mavi’s Financial, we know that managing cash flow is just as important as having the right equipment in place. Our Equipment Refinance service is designed to help businesses unlock the value of their existing equipment by turning it into accessible working capital.",
      "Refinancing with us offers flexible repayment options and competitive rates, allowing you to ease financial pressures while continuing to use the equipment that keeps your business running.",
      "By choosing Mavi’s Financial Equipment Refinance, you gain more than just liquidity—you gain a strategic advantage to strengthen your operations and support future growth.",
    ],
  },
  {
    title: "Equipment Line Of Credit",
    image: EqLiOCredit,
    content: [
      "At Mavi’s Financial, we understand that businesses often need flexible access to funds rather than a one-time loan. Our Equipment Line of Credit is designed to give you ongoing access to capital that can be used to purchase, upgrade, or maintain essential equipment whenever the need arises.",
      "This solution gives you complete financial control with the flexibility to borrow only what you need and pay interest only on the amount used.",
      "By choosing Mavi’s Financial Equipment Line of Credit, you gain a reliable partner committed to your long-term success.",
    ],
  },
  {
    title: "Factoring",
    image: fact,
    content: [
      "At Mavi’s Financial, we know that waiting on unpaid invoices can slow down your business growth. Our Factoring service helps you convert outstanding receivables into immediate cash flow.",
      "With factoring, you sell your invoices to us at a competitive rate, and we provide you with quick funding while managing the collection process from your customers.",
      "By choosing Mavi’s Financial Factoring, you gain more than just immediate cash — you gain a partner dedicated to your stability and growth.",
    ],
  },
];

const FinancialCards = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuLinks = ["Home", "About", "Services", "Contact"];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="cursor-pointer" onClick={() => handleScroll("home")}>
            <img src={mavigroup} alt="Mavi Logo" className="h-12 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {menuLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className="relative text-gray-700 hover:text-blue-700 font-medium text-lg after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-blue-700 hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white rounded-b-lg shadow-lg mt-2 overflow-hidden"
            >
              {menuLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleScroll(link)}
                  className="block py-3 px-6 w-full text-left text-gray-700 hover:text-blue-700 text-lg font-medium border-b border-gray-100"
                >
                  {link}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative h-[700px] text-white"
      >
        <img src={finance} alt="Finance" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
          >
            Financial Services
          </motion.h1>
          <motion.p
            className="text-2xl max-w-3xl leading-relaxed text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
          >
            Empower your business with financing solutions crafted for growth and stability.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={gridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={gridInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        id="about"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={gridInView ? { x: 0, opacity: 1 } : {}}
          className="overflow-hidden rounded-3xl shadow-2xl bg-white p-4"
        >
          <img src={finance2} alt="Mavi Financial" className="rounded-2xl w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={gridInView ? { x: 0, opacity: 1 } : {}}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-gray-800">About Mavi’s Financial</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Mavi Financial, we believe securing financing should be simple, transparent, and tailored to you.
            Whether you’re looking to lease, purchase, or grow your business, our team combines industry expertise
            with a personal touch to deliver solutions that fit your needs.
            <br />
            <br />
            From application to funding, we work quickly, communicate clearly, and stand by you every step of the
            way. Our mission is to help you move forward with confidence – because at Mavi Financial, your success is
            our business.
          </p>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef} // ✅ Important: attach ref here
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-20">
          Our <span className="text-blue-700">Financial Services</span>
        </h2>

        <div className="max-w-7xl mx-auto space-y-24 px-6">
          {financialServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col lg:flex-row ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              } bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="lg:w-1/2 flex justify-center items-center bg-gradient-to-r from-blue-50 to-gray-50">
                <img
                  src={service.image || Financing}
                  alt={service.title}
                  className="w-[75%] h-[400px] object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center space-y-5">
                <h3 className="text-4xl font-semibold text-gray-800 border-b-4 border-blue-600 pb-2 w-fit">
                  {service.title}
                </h3>
                {Array.isArray(service.content)
                  ? service.content.map((para, i) => (
                      <p key={i} className="text-gray-600 text-lg leading-relaxed">
                        {para}
                      </p>
                    ))
                  : (
                    <p className="text-gray-600 text-lg leading-relaxed">{service.content}</p>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="flex flex-col items-start space-y-4">
            <img src={mavi} alt="Company Logo" className="w-40 object-contain drop-shadow-lg" />
            <p className="text-gray-400 text-base leading-relaxed">
              Mavi Financial simplifies financing with transparent, personalized solutions to help you lease,
              purchase, or grow your business effortlessly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScroll(link)}
                    className="text-gray-400 hover:text-blue-400 text-base transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl text-blue-400">Services</h4>
            <ul className="space-y-3">
              {financialServices.map((item, idx) => (
                <li key={idx}>
                  <span className="text-gray-400 hover:text-blue-400 text-base transition-colors cursor-pointer">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl text-blue-400">Contact Us</h4>
            <address className="text-gray-400 not-italic space-y-4 text-base">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> 100 Rutherford Rd. S Unit# 1D, Brampton, ON L6W 3J5
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" /> 416-316-3100
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> info@mavifuel.com
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
    </>
  );
};

export default FinancialCards;
