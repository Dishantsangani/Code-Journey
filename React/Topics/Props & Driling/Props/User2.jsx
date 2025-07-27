import React from "react";

function User2(props) {
  console.log(props);
  return (
    <>
      <p>This is A Acesss Props Data :) {props.name} </p>
      <p>This is A Email id {props.email}</p>
      <p>
        This is A Other Details {props.other.address} {props.other.Mobile}
      </p>
    </>
  );
}

export default User2;
