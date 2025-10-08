import React from "react";

const FuelPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 via-red-100 to-pink-200 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Fuel Services</h1>
        <p className="text-gray-700 mt-2">
          Find the best fuel solutions for vehicles and industries.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Petrol & Diesel</h2>
          <p className="text-gray-600 mb-4">
            High-quality petrol and diesel supplies for all types of vehicles.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Order Fuel
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Industrial Fuel</h2>
          <p className="text-gray-600 mb-4">
            Reliable fuel supply for industries and large-scale operations.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Request Supply
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fuel Cards</h2>
          <p className="text-gray-600 mb-4">
            Convenient fuel cards for hassle-free refueling and tracking.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Get Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuelPage;
