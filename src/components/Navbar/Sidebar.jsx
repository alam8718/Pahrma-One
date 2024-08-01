import React from "react";
import {IoIosCloseCircleOutline} from "react-icons/io";

function Sidebar({sideOpen, setSideOpen}) {
  return (
    <div className="w-full h-full">
      {/* overlay */}
      <div className={`bg-black/30 fixed inset-0 -z-10 `}></div>
      <button
        onClick={() => setSideOpen(false)}
        className="fixed z-30 top-2 right-2">
        <IoIosCloseCircleOutline size={30} />
      </button>
      <div className="w-[256px] h-full bg-[#1D242E]">sdasd</div>;
    </div>
  );
}

export default Sidebar;
