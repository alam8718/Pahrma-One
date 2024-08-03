import React from "react";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";
import ConfigurationCard from "../../utils/ConfigurationCard";

function ConfigurationPage() {
  const pages = [
    {
      name: "Dashboard",
    },
    {
      name: "Inventory",
    },
    {
      name: "Reports",
    },
    {
      name: "Configuration",
    },
    {
      name: "Contact Management",
    },
    {
      name: "Notifications",
    },
  ];
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
      <div className="w-full flex gap-10 flex-wrap mb-10">
        <div>
          <ConfigurationCard
            cardName={"Branding"}
            fTitle={"Enter Name"}
            fText={"Pharmacy Name"}
            sTitle={"PH349TY228"}
            sText={"Pharmacy ID"}
          />
        </div>
        <div>
          <ConfigurationCard
            cardName={"Owner"}
            fTitle={"Enter Name"}
            fText={"Owner Name"}
            sTitle={"user@mail.com"}
            sText={"Email ID"}
          />
        </div>
      </div>
      {/*  */}
      <div>
        <div className="max-w-[445px] min-h-[355px]  rounded-[4px] border border-gray-400/50 font-poppins">
          {/* top part */}
          <div className="w-full h-[53px] flex items-center gap-[140px]  px-8 border-b border-b-gray-400/50">
            <p className="text-[16px] leading-[22px] font-semibold">Page</p>
            <p className="text-[16px] leading-[22px] font-semibold">Action</p>
          </div>
          {/* rest */}
          <div className="w-full h-[calc(100%-53px)] overflow-y-auto flex items-center gap-5 pl-8 py-5 flex-col ">
            {pages.map((page, index) => (
              <div key={index + 1} className="w-full h-[25px] flex gap-4 ">
                <p className="w-[160px] text-wrap text-[14px] leading-[22px] font-medium ">
                  {page?.name}
                </p>
                <div className=" flex gap-8">
                  <p className="underline text-[#03A9F5] text-[14px] leading-[22px] font-medium cursor-pointer  ">
                    + Add Sub Page
                  </p>
                  <div className="flex items-center gap-2">
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
                    <p
                      className="
                  w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-gray-100 hover:border hover:border-gray-200 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F0483E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="border border-[#1D242E4D]/30  w-full" />
          <div className="w-full h-[58px] px-7 flex items-center">
            <p className="text-[18px] leading-[22px] text-[#03A9F5] font-medium cursor-pointer">
              + Add New Page
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ConfigurationPage;
