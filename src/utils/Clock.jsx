import React, {useState, useEffect} from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutesStr}:${secondsStr}`;
  };
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex text-[12px] leading-[18px] font-poppins gap-2 justify-end">
      <p className="w-[calc(100%-50px)]  text-right">{formatDate(time)}</p>
      <p className="w-[45px] text-center">{formatTime(time)}</p>
    </div>
  );
};

export default Clock;
