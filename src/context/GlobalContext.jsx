import {createContext, useContext, useState} from "react";

export const MainContext = createContext();

export const MainProvider = ({children}) => {
  const [active, setActive] = useState("dashboard");
  const [sidebarPresent, setSidebarPresent] = useState(false);
  return (
    <MainContext.Provider
      value={{active, setActive, sidebarPresent, setSidebarPresent}}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MainContext);
};
