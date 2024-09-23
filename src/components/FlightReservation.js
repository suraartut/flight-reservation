import React from "react";

const FlightReservation = () => {
  return (
    <div className="cards mb-6">
      <div className="lg:flex justify-between">
        <h3 className="font-bold">BOOK YOUR FLIGHT</h3>
        <div>
          <button className="purple-buttons rounded-l-full font-semibold text-xs px-4">
            Round trip
          </button>
          <button className="gray-buttons rounded-r-full font-semibold text-xs px-4">
            One way
          </button>
        </div>
      </div>
      <div className="lg:flex justify-between py-6">
        <div className="lg:text-left">
          <input className="border-2 border-gray-200 rounded-l-full mr-1" />
          <input className="border-2 border-gray-200 rounded-r-full" />
        </div>
        <div className="lg:w-1/2 lg:text-right">
          <input className="border-2 border-gray-200 rounded-l-full mr-1" />
          <input className="border-2 border-gray-200 rounded-r-full" />
        </div>
      </div>
      <div className="text-left">
        <button className="purple-buttons px-3 font-semibold text-sm rounded-md">
          Show flights
        </button>
      </div>
    </div>
  );
};

export default FlightReservation;
