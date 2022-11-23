import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MyContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
