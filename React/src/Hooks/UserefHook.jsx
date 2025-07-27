import React, { useRef } from "react";

function UserefHook() {
  let inputref = useRef(null);
  const handleref = () => {
    console.log("hello");
    inputref.current.value = "1000";
    inputref.current.focus();
    inputref.current.style.color = "red";
  };
  return (
    <>
      <h1>This is a Useref Hooks</h1>
      <p>UseRef is Use for dom manipulation That Use</p>
      <input type="text" ref={inputref} />
      <button onClick={handleref}>Click</button>
    </>
  );
}

export default UserefHook;
