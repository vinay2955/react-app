import React from "react";
import { useState } from "react";
function PracticeFunction() {
  const [name, setState] = useState("vinay");

  return (
    <div>
      <h1>My name is {name}</h1>
      <button type="button" onClick={() => setState("patnala")}>
        Click
      </button>
    </div>
  );
}
export default PracticeFunction;
