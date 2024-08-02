import {Link, useLocation} from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((x) => x.replace(/%20/g, " "));

  return (
    <nav
      className="text-[#1D242E] text-[18px] md:text-[24px] leading-[24px] font-bold font-poppins"
      aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {pathnames.length > 0 ? (
          <li className="flex items-center  capitalize hover:text-primaryColor1">
            <Link to="/">Dashboard</Link>
            <svg
              className="w-5 h-5 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        ) : (
          <li className="flex items-center  capitalize hover:text-primaryColor1">
            <span>Dashboard</span>
          </li>
        )}
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return isLast ? (
            <li key={to} className="flex items-center  capitalize ">
              <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
            </li>
          ) : (
            <li key={to} className="flex items-center  capitalize ">
              {value.toLowerCase() === "food" ? (
                <Link to={"/product"}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              ) : (
                <Link to={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
              <svg
                className="w-5 h-5 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
