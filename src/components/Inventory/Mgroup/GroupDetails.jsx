import React, {useState} from "react";
import PageWrapper from "../../wrapper/PageWrapper";
import Breadcrumb from "../../../utils/BreadCrumb";
import Table2 from "../../../utils/Table2";

function GroupDetails() {
  const [addMedOpen, setAddMedOpen] = useState(false);

  const [medicines, setMedicines] = useState([
    {name: "Sugmentin 625 Duo Tablet", count: "22"},
    {name: "Azithral 500 Tablet", count: "08"},
    {name: "Wzithral 500 Tablet", count: "11"},
  ]);

  const [newMedicine, setNewMedicine] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setNewMedicine(e.target.value);
  };

  const handleAddMedicine = (e) => {
    e.preventDefault();

    if (newMedicine.trim()) {
      const newMedicineObject = {
        name: newMedicine,
        count: `${Math.floor(Math.random() * 100)}`,
      };
      setMedicines([...medicines, newMedicineObject]);
      setNewMedicine("");
    }
  };

  return (
    <>
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
            <button
              onClick={() => setAddMedOpen(true)}
              className="w-[162px] h-[46px] bg-[#F0483E] hover:bg-[#d83028] flex justify-center items-center gap-1.5 rounded-[4px] text-white">
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
          <Table2 data={medicines} />
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

      {/* add medicine popup */}
      {addMedOpen && (
        <div className="fixed inset-0 bg-black/30 z-[100] flex justify-center items-center">
          <form
            onSubmit={handleAddMedicine}
            className="max-w-[567px] w-full rounded-[4px] h-[271px] bg-white relative p-10 font-poppins">
            {/* close btn */}
            <button
              type="button"
              onClick={() => setAddMedOpen(false)}
              className="absolute top-2 right-2">
              <img src="/icons/close-icon.png" alt="Close" />
            </button>
            <div className="flex flex-col gap-6">
              <h1 className="text-[24px] leading-[22px] font-bold text-[#1D242E]">
                Add Medicine
              </h1>
              {/* input div */}
              <div className="max-w-[340px] h-[62px] flex flex-col justify-between">
                <p>Medicine</p>
                {/* search bar */}
                <div className="max-w-[340px] w-full h-[38px] rounded-[4px] bg-white border border-[#1D242E]/40 flex items-center px-3">
                  <input
                    type="text"
                    required
                    value={newMedicine}
                    onChange={handleInputChange}
                    className="w-full bg-transparent outline-none placeholder:text-[#1D242E] text-[12px] font-poppins"
                    placeholder="Enter Medicine Name or Medicine ID"
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
              {/* button */}
              <button
                type="submit"
                className="w-[235px] h-[46px] rounded-[4px] flex items-center justify-center gap-2 bg-[#F0483E] hover:bg-[#f13b32] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ebe6e6"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Add Medicine to Group
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default GroupDetails;
