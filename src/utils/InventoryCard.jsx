import React from "react";
import {Link} from "react-router-dom";

function InventoryCard({title, btnName, btnColor, count, icon, color, link}) {
  return (
    <div
      className="w-[212px] h-[152px] relative rounded-[4px]"
      style={{border: `1px solid ${color}`}}>
      {/* 1st part */}
      <div
        className="w-full h-[125px] flex flex-col gap-1.5 justify-center items-center"
        style={{borderBottom: `1px solid ${color}`}}>
        <div className="w-[37px] h-[37px] flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
        <p className="text-[20px] leading-[22px] font-bold">{count}</p>
        <p className="text-[14px] leading-[22px] font-medium">{title}</p>
      </div>
      {/* 2nd part */}
      <Link
        to={link}
        className="flex items-center justify-center w-full h-[calc(100%-125px)] text-[12px] leading-[22px]"
        style={{backgroundColor: `${btnColor}`}}>
        <p className="!text-black">{btnName}</p>
        {/* icon  */}
        <div className="rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-up">
            <path d="m17 11-5-5-5 5" />
            <path d="m17 18-5-5-5 5" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default InventoryCard;
