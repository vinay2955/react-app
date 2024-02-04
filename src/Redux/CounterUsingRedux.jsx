import { React, useState } from "react";
import { connect } from "react-redux";
import increment from "./increment";
import decrement from "./decrement";

function CounterUsingRedux(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      CounterUsingRedux
      <p>count from store:{props.count}</p>
      <p>name from store:{props.name}</p>
      <p>
        <button onClick={() => props.increase()}>Increase</button>
      </p>
      <p>
        <button onClick={() => props.decrease()}>Decrease</button>
      </p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    name: state.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterUsingRedux);
