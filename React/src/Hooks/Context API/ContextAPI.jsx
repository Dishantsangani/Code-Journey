import React, { createContext } from "react";
import Child from "./Child";

const data = createContext();
const data1 = createContext();
function ContextAPI() {
  const name = "Dishant Sangani";
  const gender = "Male";
  return (
    <>
      <p>ContextAPI</p>
      <p>Context API 3 Terms 1. Create 2.Provider 3.Consumer</p>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Child />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default ContextAPI;
export { data };
export { data1 };
