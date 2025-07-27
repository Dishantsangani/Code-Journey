import React, { useState } from "react";
import User2 from "./User2";

function User() {
  const [name, setName] = useState("Dev");
  return (
    <>
      <h1>This is a Main Props :)</h1>
      <User2
        name={name}
        email={"dev@gamil.com"}
        other={{ address: "Nikol", Mobile: "9173623532" }}
      />
      <button
        onClick={() => {
          setName("Dishant ");
        }}
      >
        Upate Name
      </button>
    </>
  );
}

export default User;
