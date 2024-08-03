import React, {useState} from "react";
import {Link} from "react-router-dom";

const Table = ({data}) => {
  const [isSorted, setIsSorted] = useState(false);
  const [tempData, setTempData] = useState([...data]);

  const handleSortToggle = () => {
    const sortedMedicines = [...data];

    if (!isSorted) {
      setTempData([...data]);
    } else {
      sortedMedicines.sort((a, b) => a.name.localeCompare(b.name));
      setTempData(sortedMedicines);
    }
    setIsSorted(!isSorted);
  };
  const handleSortToggleNum = () => {
    const sortedMedicines = [...data];

    if (!isSorted) {
      setTempData([...data]);
    } else {
      sortedMedicines.sort((a, b) => {
        return Number(a.count) - Number(b.count);
      });
      setTempData(sortedMedicines);
    }
    setIsSorted(!isSorted);
  };

  return (
    <div className="overflow-x-auto">
      <div className=" relative w-full h-full">
        <table className="w-full border text-sm text-left overflow-y-scroll ">
          <thead className="w-full border text-[16px] leading-[25px] font-poppins font-medium capitalize">
            <tr className="">
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1">
                  <p>Group Name</p>
                  {/* arrow btn */}
                  <button
                    onClick={handleSortToggle}
                    className="cursor-pointer z-10">
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
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1">
                  <p>No of Medicines</p>
                  {/* arrow btn */}
                  <button
                    onClick={handleSortToggleNum}
                    className="cursor-pointer z-10">
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
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center gap-1">
                  <p>Action</p>
                </div>
              </th>
            </tr>
          </thead>
          {tempData.map((item, index) => (
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
                    <div className="w-full  flex flex-col gap-2">
                      <Link
                        // onClick={() =>
                        //   navigate(

                        //   )
                        // }
                        to={`/inventory/medicine-group/${item?.name}`}
                        className="hover:underline hover:text-blue-800 text-[14px] leading-[22px]  font-poppins flex items-center gap-1 cursor-pointer">
                        View Full Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevrons-right">
                          <path d="m6 17 5-5-5-5" />
                          <path d="m13 17 5-5-5-5" />
                        </svg>
                      </Link>
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

export default Table;
