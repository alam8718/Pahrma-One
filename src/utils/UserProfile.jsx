import React, {useState} from "react";

function UserProfile({name, role}) {
  const [profileOption, setProfileOption] = useState(false);
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <div className="w-[207px] h-[42px] flex items-center">
        <div className="flex  gap-5 items-center">
          <div className="flex-shrink-0 relative w-[42px] h-[42px] rounded-[4px]">
            {/* active status */}
            <p className="absolute bg-[#2ED47A] w-[14px] h-[14px] rounded-full bottom-1 -right-2 border-[2px] border-[#2E3744]"></p>
            <img
              src="/public/userImg.png"
              className="w-full h-full overflow-hidden"
              alt="user"
            />
          </div>
          <div className="w-[130px]">
            <p className="text-[14px] leading-[21px] font-medium font-poppins">
              {name}
            </p>
            <p className="text-[11px] leading-[17px] font-poppins text-[#FED600] font-normal">
              {role}
            </p>
          </div>
        </div>
        {/* profile option */}
        <div className="relative">
          <button
            className="w-[15px] flex items-center justify-center"
            onClick={() => setProfileOption(!profileOption)}>
            <img src="/public/icons/three-dot-icon.png" alt="" />
          </button>
          {profileOption && (
            <div className="w-[125px] h-[86px] absolute top-10 -right-2">
              <p className="bg-white w-[20px] h-[20px] rounded-[4px] rotate-45 absolute right-1.5 -top-1 z-10"></p>
              <div className="relative bg-white w-full h-full z-20 rounded-[4px] flex flex-col items-center justify-between">
                <a
                  href="#"
                  className="w-full h-[42px] flex items-center justify-center gap-3 font-poppins text-[#1D242E]">
                  <img src="/public/icons/profile-icon.png" alt="profile" />
                  Profile
                </a>
                <hr className="w-full h-[1.5px] bg-[#1D242E]/50" />
                <a
                  href="#"
                  className="w-full h-[42px] flex items-center justify-center gap-3 font-poppins text-[#F0483E]">
                  <img src="/public/icons/logout-icon.png" alt="logout" />
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
