import React from "react";
import PageWrapper from "../../wrapper/PageWrapper";
import Breadcrumb from "../../../utils/BreadCrumb";
import Table2 from "../../../utils/Table2";

function GroupDetails() {
  const headers = [
    {name: "Medicine Name", arrow: true},
    {name: "No Of Medicines", arrow: true},
    {name: "Action", arrow: false},
  ];
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full h-full flex flex-col gap-5 mb-10">
        <div className="w-full  flex flex-wrap gap-2 justify-between">
          {/* title */}
          <div className="h-full">
            <Breadcrumb />
            <p className="pt-2 text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
              Detailed view of a medicine group.
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
              Add Medicine
            </p>
          </button>
        </div>
        {/* search bar */}
        <div className="max-w-[340px] w-full h-[38px] rounded-[4px] bg-[#E3EBF3] flex items-center px-3 ">
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-[#1D242E] text-[12px] font-poppins "
            placeholder="Search for Medicine"
          />
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      {/* table part */}
      <div className="mb-10 shadow-md">
        <Table2 headers={headers} />
      </div>
      {/* delete group btn */}
      <button className="w-[161px] h-[46px] border border-[#F0483E] rounded-[4px] flex items-center justify-center gap-2 text-[#F0483E] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F0483E"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trash">
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
        Delete Group
      </button>
    </PageWrapper>
  );
}

export default GroupDetails;
