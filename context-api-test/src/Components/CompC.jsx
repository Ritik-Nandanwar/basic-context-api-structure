import React, { useContext } from "react";
import { nameCon } from "../Context/NameContext";
const CompC = () => {
  const value = useContext(nameCon);
  return <div>CompC {value} </div>;
};

export default CompC;
