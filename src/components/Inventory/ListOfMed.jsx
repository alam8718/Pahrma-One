import React from "react";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function ListOfMed() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full  flex flex-wrap gap-2 justify-between mb-10">
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
      <div className="flex flex-wrap gap-8 text-xl">List of medicines Page</div>
    </PageWrapper>
  );
}

export default ListOfMed;
