import React from "react";
import SmallScreenNavbar from "./SmallScreenNavbar";

function Navbar() {
  return (
    <div className="w-full h-[60px] border-b border-b-gray-200 shadow-sm">
      {/* small navbar */}
      <div className="w-full h-full">
        <SmallScreenNavbar />
      </div>
    </div>
  );
}

export default Navbar;
