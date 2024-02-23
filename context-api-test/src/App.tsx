import { useContext } from "react";
import { nameCon } from "./Context/NameContext";
import CompA from "./Components/CompA";

function App() {
  return (
    <>
      <nameCon.Provider value={"Bunzoo"}>
        <CompA />
      </nameCon.Provider>
    </>
  );
}

export default App;
