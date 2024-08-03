import React from "react";
import {useGlobalContext} from "../../context/GlobalContext";

function PageWrapper({children}) {
  const {sidebarPresent} = useGlobalContext();
  return (
    <div className="w-full flex lg:justify-end font-poppins ">
      <div
        className={` ${
          sidebarPresent ? "w-full" : "lg:w-[calc(100%-256px)] w-full"
        }`}>
        <div className="p-5 lg:p-10">{children}</div>
      </div>
    </div>
  );
}

export default PageWrapper;
