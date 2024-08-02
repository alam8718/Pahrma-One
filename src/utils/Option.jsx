function Option({option, active, setActive}) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: `${
          option.children && active === option?.name.toLowerCase()
            ? `${46 * (1 + option?.children?.length)}px`
            : "46px"
        }`,
      }}>
      <a
        onClick={() => {
          setActive(option?.name.toLowerCase());
        }}
        href={option?.link}
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
      </a>
      {option?.children?.map((option, index) => (
        <a
          href={option?.link}
          key={index + 1}
          className="pl-14 flex flex-col h-[46px] justify-center hover:bg-[#009099]/20">
          {option?.name}
        </a>
      ))}
    </div>
  );
}

export default Option;
