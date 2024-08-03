import React from "react";
import PageWrapper from "../../wrapper/PageWrapper";
import Breadcrumb from "../../../utils/BreadCrumb";
import Table from "../../../utils/Table";

function Group() {
  const data = [
    {name: "Generic Medicine", count: "02"},
    {name: "Diabetes", count: "32"},
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
              List of medicines groups.
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
              Add New Group
            </p>
          </button>
        </div>
        {/* search bar */}
        <div className="max-w-[340px] w-full h-[38px] rounded-[4px] bg-[#E3EBF3] flex items-center px-3 ">
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-[#1D242E] text-[12px] font-poppins "
            placeholder="Search for anything here..."
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
      <div>
        <Table data={data} />
      </div>
    </PageWrapper>
  );
}

export default Group;
