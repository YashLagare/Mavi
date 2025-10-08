import React from "react";

const FinancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Finance Services</h1>
        <p className="text-gray-600 mt-2">
          Explore our financial solutions for your business and personal needs.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Loans</h2>
          <p className="text-gray-600 mb-4">
            Flexible personal loans with low interest rates to fulfill your dreams.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Business Loans</h2>
          <p className="text-gray-600 mb-4">
            Empower your business with the financial support it needs to grow.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Investment Plans</h2>
          <p className="text-gray-600 mb-4">
            Grow your wealth with our tailored investment options and guidance.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Explore Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
