import React from 'react'
import mavi from "../assets/mavi.png"
const Footer = () => {
  return (
      <>
          {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Image + Company Info */}
          <div className="flex flex-col items-start">
            {/* Add your image here */}
            <img 
              src={mavi} 
              alt="Company Logo" 
              className="mb-12 w-36 h-auto"
            />
            {/* <h3 className="text-xl font-bold mb-4">Fuel & Finance</h3> */}
            <p className="text-gray-400">
              Providing comprehensive solutions for fuel management, insurance, and financial services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Fuel Services", "Insurance", "Finance"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Fuel Cards", "Fleet Management", "Business Insurance", "Financial Planning"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">100 Rutherford Rd. S Unit# 1D, Brampton, ON L6W 3J5</p>
              <p className="mb-2">Mon-Fri 9 Am to 5 pm</p>
              <p className="mb-2"> info@mavifuel.com</p>
              <p>416-316-3100</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm left-35 relative">Mavi Fuel Corporation© 2025 All Rights Reserved. </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors right-80 relative">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
