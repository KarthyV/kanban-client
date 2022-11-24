import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [showAdd, setShowMAdd] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [user, setUser] = useState("");

  return (
    <MyContext.Provider
      value={{ showAdd, setShowMAdd, showMobile, setShowMobile, user, setUser }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
