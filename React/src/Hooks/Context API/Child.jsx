import React from "react";
import { data } from "./ContextAPI";
import { data1 } from "./ContextAPI";

function Child() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    my name is {name} and my gender is {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
      <p>This is A Consume The Context API</p>
    </>
  );
}

export default Child;
