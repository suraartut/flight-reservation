import React from "react";

const FlightList = () => {
  return (
    <div>
      {/* Card-1 */}
      <div className="my-4">
        <div className="flight-list-card">
          <div className="w-full text-start">
            <h5 className="font-bold text-xs text-start">Milano - Madrid</h5>

            <div className="grid grid-cols-5 my-5 items-center">
              <div>
                <p className="text-xs text-gray-600 font-semibold">Departure</p>
                <strong>7:30 AM</strong>
                <div className="text-gray-600 font-semibold">Airport: MXP</div>
              </div>

              <div className="w-1/2 h-[2px] bg-gray-400"></div>

              <div>
                <p>Alitalia</p>
                <div>Icon</div>
                <div className="text-xs text-gray-600 font-semibold">
                  2h 25m (Nonstop)
                </div>
              </div>

              <div className="w-1/2 h-[2px] bg-gray-400"></div>

              <div>
                <p className="text-xs text-gray-600 font-semibold">Arrival</p>
                <strong>9:55 AM</strong>
                <div className="text-gray-600 font-semibold">Airport: MAD</div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="purple-text font-bold">Price: $200</div>
                <div className="text-sm text-gray-600 font-semibold">
                  Round Trip
                </div>
              </div>
              <button className="book-flight-button">Book Flight</button>
            </div>
          </div>
        </div>
        <div className="w-full text-left">
          <button className="gray-buttons underline px-5 rounded-b-md font-semibold text-sm">
            Check the details
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="my-6">
        <div className="flight-list-card">
          <div className="w-full text-start">
            <h5 className="font-bold text-xs text-start">Milano - Madrid</h5>

            <div className="grid grid-cols-5 my-5 items-center">
              <div>
                <p className="text-xs text-gray-600 font-semibold">Departure</p>
                <strong>8:30 AM</strong>
                <div className="text-gray-600 font-semibold">Airport: MXP</div>
              </div>

              <div className="w-1/2 h-[2px] bg-gray-400"></div>

              <div>
                <p>Alitalia</p>
                <div>Icon</div>
                <div className="text-xs text-gray-600 font-semibold">
                  2h 25m (Nonstop)
                </div>
              </div>

              <div className="w-1/2 h-[2px] bg-gray-400"></div>

              <div>
                <p className="text-xs text-gray-600 font-semibold">Arrival</p>
                <strong>10:25 AM</strong>
                <div className="text-gray-600 font-semibold">Airport: MAD</div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="purple-text font-bold">Price: $234</div>
                <div className="text-sm text-gray-600 font-semibold">
                  Round Trip
                </div>
              </div>
              <button className="book-flight-button">Book Flight</button>
            </div>
          </div>
        </div>
        <div className="w-full text-left">
          <button className="gray-buttons underline px-5 rounded-b-md font-semibold text-sm">
            Check the details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
