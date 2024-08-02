import React from "react";
import Option from "../../utils/Option";
import UserProfile from "../../utils/UserProfile";
import {
  FirstGroupOption,
  SecondGroupOption,
  ThirdGroupOption,
} from "../../utils/SideBarOprions";
import {useGlobalContext} from "../../context/GlobalContext";

function SideBarSection({bigScreen = false, active, setActive}) {
  const {sidebarPresent, setSidebarPresent} = useGlobalContext();

  return (
    <div className="w-[256px] h-full relative">
      {/* big screen sidebar close */}
      {bigScreen && (
        <button
          onClick={() => setSidebarPresent(!sidebarPresent)}
          className="w-[15px] h-[40px] absolute bottom-[35%] -right-3.5 flex items-center justify-center ">
          <img src="/public/icons/side-icon.png" alt="" />
          <p className="absolute rotate-90 w-[10px] h-[4px]">
            <img src="/public/icons/downArrow.png" alt="" />
          </p>
        </button>
      )}

      <div className="w-full h-full bg-[#1D242E] ">
        {/* logo and name */}
        <div className="w-full flex items-center justify-center">
          <div className="bg-[#1D242E] w-[210px] h-[60px] flex items-center  gap-6">
            <img src="/public/logo.png" alt="logo" />
            <p className="text-[18px] leading-[24px] font-poppins text-white font-semibold">
              Pharma One
            </p>
          </div>
        </div>
        {/* rest part */}
        <div className="w-full h-[calc(100%-60px)] text-white bg-[#283342] overflow-y-auto">
          {/* user part */}
          <UserProfile
            userImg={"/public/userImg.png"}
            name="Subash"
            role="super Admin"
          />
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

export default SideBarSection;
