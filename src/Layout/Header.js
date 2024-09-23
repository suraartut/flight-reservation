import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-10 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-lg">PLANE SCAPE</h1>
      </div>
      <div className="flex gap-6 text-sm font-semibold">
        <div>Deals</div>
        <div>Discover</div>
        <div>Joane Smith</div>
      </div>
    </div>
  );
};

export default Header;
