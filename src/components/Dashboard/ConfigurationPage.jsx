import React from "react";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function ConfigurationPage() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full  flex flex-wrap gap-2 justify-between mb-10">
        {/* title */}
        <div className="h-full">
          <Breadcrumb />
          <p className="pt-2 text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
            Configure your pharmacy application.
          </p>
        </div>
      </div>
      {/* rest part */}
      <div>
        <div className="max-w-[456px] min-h-[140px] rounded-[4px] border border-gray-400/50 font-poppins">
          {/* top part */}
          <div className="w-full h-[53px] flex items-center justify-between px-10 border-b border-b-gray-400/50">
            <p className="text-[16px] leading-[22px] font-semibold">Branding</p>
            <p className="w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-gray-100 hover:border hover:border-gray-200 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#03A9F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pencil">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </p>
          </div>
          {/* rest */}
          <div className="w-full min-h-[calc(100%-53px)]  flex items-center gap-16 px-10 py-7">
            <div className="w-[150px] flex flex-col gap-1">
              <p className="text-[20px] leading-[22px] font-bold">Enter Name</p>
              <p className="w-full text-wrap text-[14px] leading-[22px] font-medium">
                Pharmacy Name
              </p>
            </div>
            <div className="w-[150px] flex flex-col gap-1">
              <p className="text-[20px] leading-[22px] font-bold">PH349TY228</p>
              <p className="text-[14px] leading-[22px] font-medium">
                Pharmacy Id
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ConfigurationPage;
