import React, {useState} from "react";
import SideBarSection from "./SideBarSection";
import {useGlobalContext} from "../../context/GlobalContext";
import Clock from "../../utils/Clock";

function BigScreenNavbar() {
  const [active, setActive] = useState("dashboard");
  const {sidebarPresent, setSidebarPresent} = useGlobalContext();
  return (
    <div>
      <div className="flex">
        {/* sidebar */}
        <div
          className={`w-[256px] h-screen ${
            sidebarPresent ? "-translate-x-[256px] absolute" : "translate-x-0  "
          }`}>
          <SideBarSection
            bigScreen={true}
            active={active}
            setActive={setActive}
          />
        </div>
        {/* navbar */}
        <nav
          className={`sticky top-0 flex items-center justify-between ${
            sidebarPresent ? "w-full" : "w-[calc(100%-256px)]"
          } h-[60px] px-10`}>
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
          <div
            className={`max-w-[300px] ${
              sidebarPresent ? "w-full" : "mlg:w-full"
            } flex justify-between items-center`}>
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
              className={`${
                sidebarPresent
                  ? "flex flex-col justify-between"
                  : "hidden mlg:flex flex-col justify-between "
              } w-[160px] h-[40px]`}>
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
        </nav>
      </div>
    </div>
  );
}

export default BigScreenNavbar;
