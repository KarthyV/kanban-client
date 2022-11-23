import React, { createContext, useState } from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");

  return (
    <MyContext.Provider value={{ showModal, setShowModal, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
