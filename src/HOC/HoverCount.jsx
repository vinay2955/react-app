import React from "react";
import counter from "./counter";
function HoverCount(props) {
  return (
    <div>
      <h4 onMouseOver={props.increment}> MouseOver {props.count} times</h4>
    </div>
  );
}
export default counter(HoverCount);
