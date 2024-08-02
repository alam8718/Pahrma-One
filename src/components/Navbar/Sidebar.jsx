import React, {useState} from "react";
import {FaRegCircleUser} from "react-icons/fa6";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {MdLogout} from "react-icons/md";

function Sidebar({sideOpen, setSideOpen}) {
  const [profileOption, setProfileOption] = useState(false);

  return (
    <div className="w-full h-full">
      {/* overlay */}
      <div className={`bg-black/30 fixed inset-0 -z-10 `}></div>
      <button
        onClick={() => setSideOpen(false)}
        className="fixed z-30 top-2 right-2">
        <IoIosCloseCircleOutline size={30} />
      </button>
      <div className="w-[256px] h-full bg-[#1D242E]">
        {/* logo and name */}
        <div className="bg-[#1D242E] w-full h-[60px] flex items-center justify-center gap-6">
          <img src="/public/logo.png" alt="logo" />
          <p className="text-[18px] leading-[24px] font-poppins text-white font-semibold">
            Pharma One
          </p>
        </div>
        {/* rest part */}
        <div className="w-full h-[calc(100%-60px)] text-white">
          {/* user part */}
          <div className="w-full h-[120px] flex items-center justify-center">
            <div className="w-[207px] h-[42px] flex items-center">
              <div className="flex  gap-5 items-center">
                <div className="flex-shrink-0 relative w-[42px] h-[42px] rounded-[4px]">
                  {/* active status */}
                  <p className="absolute bg-[#2ED47A] w-[14px] h-[14px] rounded-full bottom-1 -right-2 border-[2px] border-[#2E3744]"></p>
                  <img
                    src="/public/userImg.png"
                    className="w-full h-full overflow-hidden"
                    alt="user"
                  />
                </div>
                <div className="w-[135px]">
                  <p className="text-[14px] leading-[21px] font-medium font-poppins">
                    Subash
                  </p>
                  <p className="text-[11px] leading-[17px] font-poppins text-[#FED600] font-normal">
                    super admin
                  </p>
                </div>
              </div>
              {/* profile option */}
              <div className="relative">
                <button onClick={() => setProfileOption(!profileOption)}>
                  <IoEllipsisVerticalSharp size={22} />
                </button>
                {profileOption && (
                  <div className="w-[125px] h-[86px] absolute top-10 -right-1">
                    <p className="bg-white w-[20px] h-[20px] rounded-[4px] rotate-45 absolute right-1.5 -top-1 z-10"></p>
                    <div className="relative bg-white w-full h-full z-20 rounded-[4px] flex flex-col items-center justify-between">
                      <a
                        href="#"
                        className="w-full h-[42px] flex items-center justify-center gap-3 font-poppins text-[#1D242E]">
                        <FaRegCircleUser />
                        Profile
                      </a>
                      <hr className="w-full h-[1.5px] bg-[#1D242E]/50" />
                      <a
                        href="#"
                        className="w-full h-[42px] flex items-center justify-center gap-3 font-poppins text-[#F0483E]">
                        <MdLogout />
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Sidebar;
