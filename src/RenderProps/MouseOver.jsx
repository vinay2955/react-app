import React from "react";
import Counter from "./Counter";

export default function MouseOver() {
  return (
    <Counter
      render={(count, handleChange) => (
        <h4 onMouseOver={handleChange}>Mouse Over{count}</h4>
      )}
    ></Counter>
  );
}
