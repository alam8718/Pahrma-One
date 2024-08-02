import { createContext, useContext, useState, useMemo } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [active, setActive] = useState("dashboard");
  const [sidebarPresent, setSidebarPresent] = useState(false);

  const contextValue = useMemo(() => ({
    active,
    setActive,
    sidebarPresent,
    setSidebarPresent,
  }), [active, sidebarPresent]);

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MainContext);
};