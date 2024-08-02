import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Clock from "../../utils/Clock";

function SmallScreenNavbar() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center gap-2 w-full h-full ">
        {/* toggle icon */}
        <div>
          <button
            onClick={() => setSideOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
        {/* search bar and lang time */}
        <div className="w-full flex justify-between gap-2">
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
          {/* lang and time */}
          <div
            className={`max-w-[300px] pr-3 flex justify-between items-center`}>
            {/* lang select */}
            <div className="w-[118px] flex items-center gap-2">
              <img
                src="/public/icons/lang.png"
                className="flex-shrink-0 w-[20px] h-[20px]"
                alt=""
              />
              <select className="text-[12px] leading-[18px] font-poppins outline-none">
                <option value="english">English(US)</option>
                <option value="hindi">Hindi</option>
                <option value="bangla">Bangla</option>
              </select>
            </div>
            {/*  */}
            <div
              className={`hidden sm:flex flex-col justify-between  w-[160px] h-[40px]`}>
              <div className="w-full justify-end flex gap-3.5 items-center font-poppins">
                <p className="w-[18px] h-[18px] rounded-full bg-[#FED600]"></p>
                <p className="text-[14px] leading-[24px] font-medium">
                  Good Morning
                </p>
              </div>
              {/* time and date */}
              <Clock />
            </div>
          </div>
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
