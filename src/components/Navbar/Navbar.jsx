import React from "react";
import SmallScreenNavbar from "./SmallScreenNavbar";
import BigScreenNavbar from "./BigScreenNavbar";

function Navbar() {
  return (
    <div className="w-full h-[60px] border-b border-b-gray-200 shadow-sm">
      {/* small navbar */}
      <div className="w-full h-full lg:hidden">
        <SmallScreenNavbar />
      </div>
      <div className=" hidden lg:block w-full h-full">
        <BigScreenNavbar />
      </div>
    </div>
  );
}

export default Navbar;
