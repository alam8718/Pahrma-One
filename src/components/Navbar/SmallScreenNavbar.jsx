import React, {useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {IoReorderThreeOutline} from "react-icons/io5";
import Sidebar from "./Sidebar";

function SmallScreenNavbar() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-around w-full h-full ">
        {/* toggle icon */}
        <div>
          <button
            onClick={() => setSideOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
        {/* searchbar */}
        <div className="max-w-[440px] w-full h-[38px] rounded-[4px] bg-[#E3EBF3] flex items-center px-3 ">
          <IoIosSearch size={22} />
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-[#1D242E] text-[12px] font-poppins "
            placeholder="Search for anything here..."
          />
        </div>
      </nav>
      {/* sidebar */}
      {sideOpen && (
        <div className="w-full h-screen fixed inset-0 z-20">
          <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen} />
        </div>
      )}
    </>
  );
}

export default SmallScreenNavbar;
