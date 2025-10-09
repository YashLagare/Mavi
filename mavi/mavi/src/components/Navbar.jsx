
import { Fuel, ShieldCheck, Wallet } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img
            src="/mavigroup.jpg"
            alt="Mavi's Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Fuel
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Finance
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Insurance
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/1.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Empowering Your Journey with Smart Fuel, Finance & Insurance Services.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We deliver high-quality, reliable services that help you grow faster and smarter.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-2xl font-semibold text-lg hover:bg-blue-50"
          >
            Explore Our Services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</div>
            <div className="text-blue-100 text-sm md:text-base">Happy Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-100 text-sm md:text-base">Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-100 text-sm md:text-base">Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-11 md:py-15 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/2.jpeg"
          alt="About Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mavi Group is a diversified business enterprise committed to driving growth through excellence in fuel, finance, and insurance. With a vision to empower individuals and organizations, we deliver innovative, reliable, and sustainable solutions that keep businesses moving forward.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Mavi Group, integrity, innovation, and customer satisfaction are at the core of everything we do — building trust and shaping a brighter, more secure future for all.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              In the fuel sector, we ensure consistent energy supply and operational efficiency. Our finance division offers tailored financial solutions designed to support growth, stability, and smart investments. Through our insurance services, we provide protection and peace of mind, safeguarding what matters most to our clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 10 years of industry experience, we've helped hundreds of businesses achieve their goals through cutting-edge technology and personalized service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-700">10+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-700">5000+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-700">3</div>
                <div className="text-sm text-gray-600">Core Divisions</div>
              </div>
            </div>
          </div>

          {/* <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </div>
          </div> */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/3..jpeg"
                  alt="Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      name: "Fuel",
      path: "/services/fuel",
      icon: <Fuel className="text-blue-600 w-6 h-6" />,
      image: "/4..jpeg",
      description: "Comprehensive fuel management solutions with real-time tracking, cost optimization, and seamless delivery services for your business.",
      features: ["Real-time Tracking", "Cost Optimization", "24/7 Delivery"]
    },
    {
      name: "Finance",
      path: "/services/finance",
      icon: <Wallet className="text-blue-600 w-6 h-6" />,
      image: "/5..jpeg",
      description: "Smart financial solutions and expert advisory services to help you make informed decisions and achieve your financial goals.",
      features: ["Smart Planning", "Investment Advice", "Loan Solutions"]
    },
    {
      name: "Insurance",
      path: "/services/insurance",
      icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
      image: "/6..jpeg",
      description: "Complete insurance coverage tailored to your needs. Protect your assets with our comprehensive protection plans and expert guidance.",
      features: ["Full Coverage", "Fast Claims", "Expert Support"]
    },
  ];

  return (
    <section id="services" className="relative py-11 md:py-15 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-60"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="/7..jpeg"
          alt="Services Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our professional offerings designed to meet your business needs with excellence and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.path}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col overflow-hidden min-h-[550px] md:min-h-[600px] border border-gray-100 hover:border-blue-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">{service.icon}</span>
                </div>

                <h3 className="absolute bottom-4 left-4 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {service.name}
                </h3>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white">
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-gray-700 group/item">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-lg">Learn More</span>
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-11 md:py-15 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/8..jpeg"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600 leading-relaxed">
              123 Business Street<br />
              Suite 456<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-gray-700">Main:</span> +1 (555) 123-4567
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-gray-700">Support:</span> +1 (555) 123-4568
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-700">Fax:</span> +1 (555) 123-4569
            </p>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-gray-700">General:</span><br />
              info@mavigroup.com
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-gray-700">Support:</span><br />
              support@mavigroup.com
            </p>
            {/* <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-700">Sales:</span><br />
              sales@mavigroup.com
            </p> */}
          </div>
        </div>

        {/* <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-gray-600">We're available during the following hours</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">Monday - Friday</p>
              <p className="text-blue-600 text-xl font-bold">9:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">Saturday - Sunday</p>
              <p className="text-blue-600 text-xl font-bold">10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/9..jpeg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="cursor-pointer mb-4" onClick={() => scrollToSection("hero")}>
              <div className="text-white font-bold text-4xl mb-2">
                Mavi's
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Empowering businesses with innovative solutions and exceptional service since 2010.
            </p>

            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("hero")} className="block text-blue-100 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block text-blue-100 hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="block text-blue-100 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div> */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Quick Links</h4>
            <div className="flex justify-center gap-12">
              {/* First Column */}
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection("hero")} className="text-blue-100 hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection("about")} className="text-blue-100 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-blue-100 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </button>
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection("services/fuel")} className="text-blue-100 hover:text-white transition-colors">
                  Fuel
                </button>
                <button onClick={() => scrollToSection("services/finance")} className="text-blue-100 hover:text-white transition-colors">
                  Finance
                </button>
                <button onClick={() => scrollToSection("services/insurance")} className="text-blue-100 hover:text-white transition-colors">
                  Insurance
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-100">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: info@brandlogo.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Phone: +1 (555) 123-4567</span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Hours: Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>


          {/* <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2 text-blue-100">
              <p>Email: info@brandlogo.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div> */}
        </div>

        <div className="border-t border-blue-700/50 pt-8 text-center">
          <p className="text-blue-200">&copy; {new Date().getFullYear()} mavigroup. All rights reserved.</p>
        </div>
        {/* <div className="border-t border-blue-700/50 pt-4 flex justify-between items-center text-sm px-4 md:px-0">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} mavigroup. All rights reserved.
          </p>
          <p className="text-blue-200">
            Designed By EXTER
          </p>
        </div> */}

      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}