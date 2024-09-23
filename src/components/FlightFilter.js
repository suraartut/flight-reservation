import React from "react";

const FlightFilter = () => {
  return (
    <div className="text-start my-4">
      <h4 className="font-bold pt-3 pb-2">Sort by:</h4>
      {/* dropdown */}
      <div>
        <h5 className="font-bold pt-3 pb-2">Arrival Time</h5>
        <div className="items-center text-sm font-semibold pb-1">
          <label>
            <input
              type="radio"
              name="arrival_time"
              value="5:00 AM - 11:59 AM"
              checked
            />
            5:00 AM - 11:59 AM
          </label>
        </div>
        <div className="flex gap-2 items-center text-sm font-semibold">
          <label>
            <input
              type="radio"
              name="arrival_time"
              value="12:00 PM - 5:59 PM"
            />
            12:00 PM - 5:59 PM
          </label>
        </div>
      </div>
      <div>
        <h5 className="font-bold pt-3 pb-2">Stops</h5>
        <div className="items-center text-sm font-semibold pb-1">
          <label>
            <input type="radio" name="stops" value="Nonstop" checked />
            Nonstop
          </label>
        </div>
        <div className="flex gap-2 items-center text-sm font-semibold pb-1">
          <label>
            <input type="radio" name="stops" value="1 Stop" />1 Stop
          </label>
        </div>
        <div className="flex gap-2 items-center text-sm font-semibold">
          <label>
            <input type="radio" name="stops" value="2+ Stops" />
            2+ Stops
          </label>
        </div>
      </div>
      <div>
        <h5 className="font-bold pt-3 pb-2">Airlines Included</h5>
        {/* <radiobutton></radiobutton> */}
        {/* <radiobutton></radiobutton> */}
        {/* <radiobutton></radiobutton> */}
        {/* <radiobutton></radiobutton> */}
        {/* <radiobutton></radiobutton> */}
        {/* <radiobutton></radiobutton> */}
      </div>
    </div>
  );
};

export default FlightFilter;
