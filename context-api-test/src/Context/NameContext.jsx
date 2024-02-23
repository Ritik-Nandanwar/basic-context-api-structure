import React, { Children, createContext, useState } from "react";
const nameCon = createContext();
const NameContext = ({ children }) => {
  return (
    <>
      <nameCon.Provider value={"Ritikk"}>{children}</nameCon.Provider>
    </>
  );
};

export { nameCon };
export default NameContext;
