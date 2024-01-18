import React from "react";
import counter from "./counter";
function ButtonCount(props) {
  return (
    <div>
      <button onClick={props.increment}> clicked {props.count} times</button>
    </div>
  );
}
export default counter(ButtonCount);
