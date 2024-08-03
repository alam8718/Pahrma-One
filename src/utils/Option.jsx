import {useState} from "react";
import {Link} from "react-router-dom";

function Option({option, active, setActive}) {
  const [dropOpen, setDropOpen] = useState(false);
  const parent = option?.name;
  return (
    <div
      onClick={() => setDropOpen(!dropOpen)}
      className="w-full overflow-hidden">
      <Link
        onClick={() => {
          setActive(option?.name.toLowerCase());
        }}
        to={option?.link}
        className={`w-full h-[46px] flex justify-between items-center  pl-7 pr-4 ${
          active === option?.name.toLowerCase()
            ? "bg-[#009099]"
            : "hover:bg-[#009099]/20"
        }`}>
        <div className="flex gap-4 items-center">
          <img
            src={option?.icon}
            alt="icon"
            className="
                 flex-shrink-0 w-[14px] h-[14px]"
          />
          <p
            className={`text-[14px] leading-[21px] font-medium text-white font-poppins flex items-center `}>
            {option?.name}
          </p>
        </div>
        {/* arrow icon */}
        {option?.children && (
          <div>
            {active === option?.name.toLowerCase() ? (
              <img
                src="/public/icons/upArrow.png"
                className="w-[8px] h-[5px]"
                alt="down arrow"
              />
            ) : (
              <img
                src="/public/icons/downArrow.png"
                className="w-[8px] h-[5px]"
                alt="down arrow"
              />
            )}
          </div>
        )}
      </Link>
      {dropOpen &&
        option?.children?.map((option, index) => (
          <Link
            onClick={() => {
              setActive(option?.name.toLowerCase());
            }}
            to={option?.link}
            key={index + 1}
            className={`pl-14 flex flex-col h-[46px] justify-center ${
              active === option?.name.toLowerCase()
                ? "bg-[#009099]"
                : "hover:bg-[#009099]/20"
            }`}>
            {option?.name}
          </Link>
        ))}
    </div>
  );
}

export default Option;
