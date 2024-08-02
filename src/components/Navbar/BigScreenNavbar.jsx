import React, {useState} from "react";
import SideBarSection from "./SideBarSection";

function BigScreenNavbar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-[256px] h-screen ">
        <SideBarSection active={active} setActive={setActive} />
      </div>
      <nav className="flex items-center justify-around w-[calc(100%-256px)] h-[60px] ">
        {/* searchbar */}
        <div className="max-w-[440px] w-full h-[38px] rounded-[4px] bg-[#E3EBF3] flex items-center px-3 ">
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-[#1D242E] text-[12px] font-poppins "
            placeholder="Search for anything here..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {/*  */}
        <div className="flex justify-between items-center"></div>
      </nav>
    </div>
  );
}

export default BigScreenNavbar;
