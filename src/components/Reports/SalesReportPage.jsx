import React from "react";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function SalesRepoPage() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full  flex flex-wrap gap-2 justify-between mb-10">
        {/* title */}
        <div className="h-full">
          <Breadcrumb />
          <p className="pt-2 text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
            List of sales
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 text-xl">Sales Report Page</div>
    </PageWrapper>
  );
}

export default SalesRepoPage;
