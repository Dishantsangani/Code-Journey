import React, { useCallback, useState } from "react";
import UseCallback2 from "./UseCallback2";

function UsecallbackHook() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {
    // Some Operartion
  }, [count]);
  return (
    <>
      <h1>UsecallbackHook</h1>
      <UseCallback2 learning={learning} count={count} />
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click</button>
      <br />
      {count}
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

export default UsecallbackHook;
