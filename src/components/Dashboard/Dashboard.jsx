import React from "react";
import PageWrapper from "../wrapper/PageWrapper";
import Breadcrumb from "../../utils/BreadCrumb";

function Dashboard() {
  return (
    <PageWrapper>
      {/* top part */}
      <div className="w-full  flex flex-wrap gap-2 justify-between mb-10">
        {/* title */}
        <div className="h-full">
          <Breadcrumb />
        </div>
      </div>

      <div>Dashboard Page</div>
    </PageWrapper>
  );
}

export default Dashboard;
