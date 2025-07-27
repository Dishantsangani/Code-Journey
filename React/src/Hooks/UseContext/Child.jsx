import React, { useContext } from "react";
import { data, data1 } from "./Contexthook";

function Child() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <p>Child Component</p>
      <h1>
        hi my name is {name} and my gender is {gender}
      </h1>
    </>
  );
}

export default Child;
