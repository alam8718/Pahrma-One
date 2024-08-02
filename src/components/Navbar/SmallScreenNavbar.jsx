import React, {useState} from "react";
import Sidebar from "./Sidebar";

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
