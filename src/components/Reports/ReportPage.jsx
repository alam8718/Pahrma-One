import React from "react";
import InventoryCard from "../../utils/InventoryCard";
import {reportCards} from "../../Data/InventoryData";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function ReportPage() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full  flex flex-wrap gap-2 justify-between mb-10">
        {/* title */}
        <div className="h-full">
          <Breadcrumb />
          <p className="pt-2 text-[#1D242E] text-[14px] leading-[21px] font-normal font-poppins">
            Overall reports related to the pharmacy.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap gap-8">
        {reportCards.map((card, index) => (
          <InventoryCard
            key={index + 1}
            title={card?.title}
            btnName={card?.btnName}
            count={card?.count}
            icon={card?.icon}
            color={card?.color}
            btnColor={card?.btnColor}
            link={card?.link}
          />
        ))}
      </div>
      {/*  */}
    </PageWrapper>
  );
}

export default ReportPage;
