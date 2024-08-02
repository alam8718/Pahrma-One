import React from "react";
import InventoryCard from "../../utils/InventoryCard";
import {cards} from "../../Data/InventoryData";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function Inventory() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full h-[56px] flex flex-wrap gap-2 justify-between mb-10">
        {/* title */}
        <div className="h-full">
          <Breadcrumb />
          <p className="pt-2 text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
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
      {/*  */}
    </PageWrapper>
  );
}

export default Inventory;
