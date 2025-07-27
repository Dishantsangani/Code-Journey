import React from "react";
import { useParams } from "react-router-dom";

function Person() {
  const params = useParams();
  const { name } = params;
  console.log('name: ', name)
  return (
    <>
      <p>Person {name} Page</p>
    </>
  );
}

export default Person;
