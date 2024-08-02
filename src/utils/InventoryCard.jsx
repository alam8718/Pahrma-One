import React from "react";
import {Link} from "react-router-dom";

function InventoryCard({title, btnName, count, icon}) {
  return (
    <div
      className="w-[212px] h-[152px] relative"
      style={{border: "1px solid #03A9F5"}}>
      {/* 1st part */}
      <div className="w-full h-[125px] flex flex-col gap-1.5 justify-center border-b border-b-[#03A9F5] items-center">
        <div className="w-[37px] h-[37px] flex items-center justify-center">
          <img src="/public/icons/bag1.png" className=" " alt="" />
        </div>
        <p className="text-[20px] leading-[22px] font-bold">123</p>
        <p className="text-[14px] leading-[22px] font-medium">
          Medicines Available
        </p>
      </div>
      {/* 2nd part */}
      <Link
        className="flex items-center justify-center w-full h-[calc(100%-125px)] text-[12px] leading-[22px]"
        style={{backgroundColor: "#03A9F54D"}}>
        View Full List
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
