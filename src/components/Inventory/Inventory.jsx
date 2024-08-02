import React from "react";
import {useGlobalContext} from "../../context/GlobalContext";
import InventoryCard from "../../utils/InventoryCard";
import {cards} from "../../Data/InventoryData";

function Inventory() {
  const {sidebarPresent} = useGlobalContext();
  return (
    <div className="w-full flex lg:justify-end font-poppins">
      <div
        className={`${
          sidebarPresent ? "w-full" : "lg:w-[calc(100%-256px)] w-full"
        }`}>
        <div className="p-5 lg:p-10">
          {/* top part */}
          <div className="w-full h-[56px] flex justify-between mb-10">
            {/* title */}
            <div className="h-full">
              <h1 className="text-[#1D242E] text-[24px] leading-[24px] font-bold font-poppins">
                Inventory
              </h1>
              <p className="text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
                List of medicines available for sales.
              </p>
            </div>
            {/* add new item btn */}
            <button className="w-[162px] h-[46px] bg-[#F0483E] hover:bg-[#d83028] flex justify-center items-center gap-1.5 rounded-[4px] text-white">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p className="text-[15px] leading-[22px] font-poppins">
                Add new item
              </p>
            </button>
          </div>
          {/* cards */}
          <div className="flex flex-wrap gap-8">
            {cards.map((card, index) => (
              <InventoryCard
                key={index + 1}
                title={card?.title}
                btnName={card?.btnName}
                count={card?.count}
                icon={card?.icon}
                color={card?.color}
                btnColor={card?.btnColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
