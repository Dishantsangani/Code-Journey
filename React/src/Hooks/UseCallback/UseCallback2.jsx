import React, { memo } from "react";

function UseCallback2({ props, count }) {
  console.log("This is Child Component");
  return (
    <>
      <h1>UseCallback2</h1>
    </>
  );
}

export default memo(UseCallback2);
