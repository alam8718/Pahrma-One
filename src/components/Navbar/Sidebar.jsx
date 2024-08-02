import React, {useState} from "react";
import SideBarSection from "./SideBarSection";

function Sidebar({sideOpen, setSideOpen}) {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-full h-full ">
      {/* overlay */}
      <div className={`bg-black/30 fixed inset-0 -z-10 `}></div>
      <button
        onClick={() => setSideOpen(false)}
        className="fixed z-30 top-2 right-2">
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
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <SideBarSection active={active} setActive={setActive} />
    </div>
  );
}

export default Sidebar;
