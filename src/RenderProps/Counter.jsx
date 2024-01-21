import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };

  return <div>{props.render(count, handleChange)}</div>;
}
