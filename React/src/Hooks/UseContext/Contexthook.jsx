import React, { createContext } from "react";
import Child from "./Child";

const data = createContext();
const data1 = createContext();
function Contexthook() {
  const name = "Dishant Sangani";
  const gender = "Male";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Child />
        </data1.Provider>
      </data.Provider>
      <h1> this is a Context Hook </h1>
    </>
  );
}

export default Contexthook;
export {data,data1}
