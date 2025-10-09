import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import finance from "../assets/finace.jpg";
import mavigroup from "../assets/mavigroup.jpg"
const financialServices = [
  {
    title: "Equipment Financing",
    content: "At Mavi’s Financial, we understand that having the right equipment is essential for running and growing a successful business.\n Our Equipment Financing service is designed to help businesses acquire the tools, machinery, or vehicles they need without putting a strain on their cash reserves.\n Instead of large upfront costs, we offer flexible financing options that make it easier for you to invest in your operations while keeping your working capital intactWith our tailored financing plans, you can choose terms that best fit your budget and growth goals.\n Whether you are a small business upgrading to modern equipment or a growing company looking to expand, Mavi’s Financial ensures that you get quick approvals, competitive rates, and repayment schedules suited to your needs. Our goal is to make financing simple, accessible, and stress-free so you can focus on what matters most—running your business.By partnering with Mavi’s Financial for your equipment financing needs, you gain more than just funding—you gain a reliable partner committed to your success. We empower you to stay competitive with up-to-date equipment, improve efficiency, and achieve your long-term goals without financial roadblocks. With us by your side, you can move forward confidently, knowing your business has the support it needs to thrive."
  },
  {
    title: "Equipment Lease & Loan",
    content: "At Mavi’s Financial, we provide flexible Equipment Lease & Loan solutions to help businesses access the machinery, vehicles, or technology they need without heavy upfront costs.\n Whether you want to lease equipment for a specific period or own it through a financing plan, our services are designed to give you the financial freedom to choose what works best for your business.\nOur leasing options allow you to use the latest equipment with low monthly payments and the ability to upgrade when needed, while our loan options give you full ownership over time with competitive rates and manageable installments. Both choices are tailored to preserve your working capital, improve cash flow, and ensure your business operations never slow down due to financial constraints.\nWith Mavi’s Financial Equipment Lease & Loan, you gain access to fast approvals, personalized terms, and a partner that understands your growth journey. Whether you are a startup or an established enterprise, we are committed to making the process simple, transparent, and beneficial for your business’s long-term success."
  },
  {
    title: "Equipment Refinance",
    content: "At Mavi’s Financial, we know that managing cash flow is just as important as having the right equipment in place.\n Our Equipment Refinance service is designed to help businesses unlock the value of their existing equipment by turning it into accessible working capital. Instead of being tied up in fixed assets, you can refinance your machinery, vehicles, or tools to access funds that can be used for expansion, payroll, debt consolidation, or day-to-day operations.\nRefinancing with us offers flexible repayment options and competitive rates, allowing you to ease financial pressures while continuing to use the equipment that keeps your business running. Since the equipment itself serves as collateral, the approval process is typically faster and simpler compared to traditional financing, making it an ideal option for businesses of all sizes.\nRefinancing with us offers flexible repayment options and competitive rates, allowing you to ease financial pressures while continuing to use the equipment that keeps your business running. Since the equipment itself serves as collateral, the approval process is typically faster and simpler compared to traditional financing, making it an ideal option for businesses of all sizes."
  },
  {
    title: "Equipment Line Of Credit",
    content: "At Mavi’s Financial, we understand that businesses often need flexible access to funds rather than a one-time loan.\n Our Equipment Line of Credit is designed to give you ongoing access to capital that can be used to purchase, upgrade, or maintain essential equipment whenever the need arises. Instead of reapplying for financing each time, you’ll have a pre-approved credit line ready to draw from—helping you act quickly when opportunities or urgent needs come up.\nThis solution gives you complete financial control with the flexibility to borrow only what you need and pay interest only on the amount used. Whether it’s acquiring new machinery, upgrading technology, or covering seasonal demands, our Equipment Line of Credit ensures your business always has a safety net. Plus, with competitive rates and revolving access, it’s a smarter way to manage cash flow while keeping your operations running smoothly.\nBy choosing Mavi’s Financial Equipment Line of Credit, you gain a reliable partner committed to your long-term success. We make the process simple, transparent, and tailored to your business needs, giving you the confidence to grow without worrying about financial limitations. With us by your side, your business will always have the resources to seize opportunities and stay ahead of the competition."
  },
  {
    title: "Factoring",
    content: "At Mavi’s Financial, we know that waiting on unpaid invoices can slow down your business growth. \nOur Factoring service helps you convert outstanding receivables into immediate cash flow, giving your business the working capital it needs without waiting weeks or months for clients to pay. This way, you can cover expenses, invest in growth, or take on new projects with confidence.\nWith factoring, you sell your invoices to us at a competitive rate, and we provide you with quick funding while managing the collection process from your customers. This not only improves your cash flow but also reduces the burden of chasing late payments, allowing you to focus on running and expanding your business. Factoring is especially useful for companies dealing with long payment cycles or seasonal fluctuations.\nBy choosing Mavi’s Financial Factoring, you gain more than just immediate cash—you gain a partner dedicated to your stability and growth. Our process is simple, transparent, and tailored to your needs, ensuring you have the financial flexibility to stay competitive and seize opportunities as they arise."
  }
];

const FinancialCards = () => {
  const [expanded, setExpanded] = useState(null); // track one expanded card at a time
  const toggleExpand = (index) => setExpanded(expanded === index ? null : index);

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
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
        className="relative text-white h-[750px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img src={finance} alt="Finance" className="absolute inset-0 w-full h-full object-cover blur-xs" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Financial Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Empower your business with comprehensive financial solutions tailored for growth and stability.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        ref={gridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={gridInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={gridInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            alt="Financial Services"
            className="h-full w-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={gridInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive Financial Services</h2>
          <p className="text-gray-600 mb-6">
            Empower your business growth with our tailored financial solutions.
            From business loans to asset management, we help you achieve
            stability, scalability, and long-term success.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Flexible loan and leasing options for businesses of all sizes",
              "Expert financial planning and advisory services",
              "Cash flow management and risk assessment",
              "Transparent and secure digital processing",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle text-blue-800 mt-1 mr-3"></i>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Financial Services Cards */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Our Financial Services
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {financialServices.map((service, index) => {
            const isExpanded = expanded === index;
            const contentPreview = service.content.split("\n").slice(0, 2).join("\n");

            return (
              <motion.div
                key={index}
                layout
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 flex flex-col cursor-pointer transition-all duration-500 ${
                  isExpanded ? "bg-blue-50 shadow-2xl" : "shadow-lg hover:shadow-xl"
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                  <span>By Mavi Financial</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>

                {/* Animated Content */}
                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.p
                      key="expanded"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-700 whitespace-pre-line mb-4"
                    >
                      {service.content}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="collapsed"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-700 whitespace-pre-line mb-4"
                    >
                      {contentPreview + (service.content.length > contentPreview.length ? "..." : "")}
                    </motion.p>
                  )}
                </AnimatePresence>

                {service.content.split("\n").length > 2 && (
                  <span className="mt-auto text-blue-600 rounded-lg transition-colors self-start cursor-pointer select-none">
                    {isExpanded ? "Show Less" : "Read More"}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>
       {/* Extra Info Cards Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </>
  );
};

export default FinancialCards;




