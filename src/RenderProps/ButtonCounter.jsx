import React from "react";
import Counter from "./Counter";

export default function ButtonCounter(props) {
  return (
    <Counter
      render={(count, handleChange) => (
        <button onClick={handleChange}>button count{count}</button>
      )}
    ></Counter>
  );
}
