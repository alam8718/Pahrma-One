import React, {useState} from "react";
import {FaRegCircleUser} from "react-icons/fa6";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {MdLogout, MdOutlineSpaceDashboard} from "react-icons/md";
import {SlGraph} from "react-icons/sl";
import UserProfile from "../../utils/UserProfile";
import {
  FirstGroupOption,
  SecondGroupOption,
  ThirdGroupOption,
} from "../../utils/SideBarOprions";
import Option from "../../utils/Option";

function Sidebar({sideOpen, setSideOpen}) {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-full h-full ">
      {/* overlay */}
      <div className={`bg-black/30 fixed inset-0 -z-10 `}></div>
      <button
        onClick={() => setSideOpen(false)}
        className="fixed z-30 top-2 right-2">
        <IoIosCloseCircleOutline size={30} />
      </button>
      <div className="w-[256px] h-full bg-[#1D242E] ">
        {/* logo and name */}
        <div className="bg-[#1D242E] w-full h-[60px] flex items-center justify-center gap-6">
          <img src="/public/logo.png" alt="logo" />
          <p className="text-[18px] leading-[24px] font-poppins text-white font-semibold">
            Pharma One
          </p>
        </div>
        {/* rest part */}
        <div className="w-full h-[calc(100%-60px)] text-white bg-[#283342] overflow-y-auto">
          {/* user part */}
          <UserProfile name="Subash" role="super Admin" />
          {/* rest part */}
          <div className="w-full">
            {FirstGroupOption.map((option, index) => (
              <Option
                option={option}
                key={index + 1}
                active={active}
                setActive={setActive}
              />
            ))}
            <hr className="h-[1px] bg-gray-700 my-5" />
            {SecondGroupOption.map((option, index) => (
              <Option
                option={option}
                key={index + 1}
                active={active}
                setActive={setActive}
              />
            ))}
            <hr className="h-[1px] bg-gray-700 my-5" />

            {ThirdGroupOption.map((option, index) => (
              <Option
                option={option}
                key={index + 1}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
