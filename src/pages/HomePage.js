import React from "react";
import FlightReservation from "../components/FlightReservation";
import FlightList from "../components/FlightList";
import FlightFilter from "../components/FlightFilter";
import OtherCategories from "../components/OtherCategories";

const HomePage = () => {
  return (
    <div className="lg:px-10 px-6 lg:grid grid-cols-4 gap-6">
      <div className="col-span-3">
        <FlightReservation />
        <div className="lg:grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <FlightList />
          </div>
          <FlightFilter />
        </div>
      </div>
      <div>
        <OtherCategories />
      </div>
    </div>
  );
};

export default HomePage;
