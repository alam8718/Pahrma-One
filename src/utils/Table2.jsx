import React from "react";

const Table2 = ({headers, data}) => {
  return (
    <div className="overflow-x-auto">
      <div className=" relative w-full h-full">
        <table className="w-full border text-sm text-left overflow-y-scroll ">
          <thead className="w-full border text-[16px] leading-[25px] font-poppins font-medium capitalize">
            <tr className="">
              {headers?.map((head, index) => (
                <th key={index + 1} scope="col" className="px-6 py-3 ">
                  <div className="flex items-center gap-1">
                    <p>{head?.name}</p>
                    {head?.arrow && (
                      <p className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevrons-up-down">
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </p>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {data.map((item, index) => (
            <tbody key={index + 1}>
              <tr className="border-y-[1px]  ">
                {/*   */}
                <td scope="row" className="px-6 py-3 ">
                  <div className="flex items-center gap-3  w-[200px]">
                    <div className="w-full  flex  gap-5 items-center">
                      <h1 className="text-[14px] leading-[22px] capitalize  font-poppins  ">
                        {item?.name}
                      </h1>
                    </div>
                  </div>
                </td>
                {/*  */}
                <td scope="row" className="px-6 py-4 ">
                  <div className="flex items-center gap-3 w-[200px]">
                    <div className="w-full  flex flex-col gap-2">
                      <h1 className="text-[14px] leading-[22px]  font-poppins  ">
                        {item?.count}
                      </h1>
                    </div>
                  </div>
                </td>
                {/*  */}
                <td scope="row" className="px-6 py-4 ">
                  <div className="flex items-center gap-3 w-[200px]">
                    <div className="w-full  flex items-center gap-1 text-[#F0483E]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
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
                      <h1 className=" text-[14px] leading-[22px]  font-poppins flex items-center gap-1 cursor-pointer">
                        Remove From Group
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table2;
