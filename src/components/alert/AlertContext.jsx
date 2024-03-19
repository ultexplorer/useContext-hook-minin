import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();
export const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
