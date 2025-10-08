import React from "react";

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Insurance Services</h1>
        <p className="text-gray-700 mt-2">
          Protect your life, vehicle, and assets with our insurance plans.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Life Insurance</h2>
          <p className="text-gray-600 mb-4">
            Secure your family's future with our flexible life insurance plans.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Get Quote
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vehicle Insurance</h2>
          <p className="text-gray-600 mb-4">
            Comprehensive insurance for cars, bikes, and commercial vehicles.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Get Quote
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Health Insurance</h2>
          <p className="text-gray-600 mb-4">
            Protect your health with tailored insurance plans for you and your family.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
