import React from "react";
import SideBarSection from "./SideBarSection";
import {useGlobalContext} from "../../context/GlobalContext";

function Sidebar({sideOpen, setSideOpen}) {
  const {active, setActive} = useGlobalContext();
  return (
    <div className="w-full h-full ">
      {/* overlay */}
      <div className={`bg-black/30 fixed inset-0 -z-10 `}></div>
      <button
        onClick={() => setSideOpen(false)}
        className="fixed z-30 top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-x">
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </button>
      <SideBarSection active={active} setActive={setActive} />
    </div>
  );
}

export default Sidebar;
