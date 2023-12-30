import React, { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "userName") {
      setUsername(e.target.value);
    } else if (e.target.name === "pwd") {
      setPwd(e.target.value);
    }
  };
  const submitForm = () => {
    alert(`username:${userName}password:${pwd}`);
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <p>
        <label htmlFor="userName">User Name</label>
        <input
          name="userName"
          type="text"
          value={userName}
          onChange={changeHandler}
        />
      </p>
      <p>
        <label htmlFor="pwd">Password</label>
        <input
          name="pwd"
          type="password"
          value={pwd}
          onChange={changeHandler}
        />
      </p>
      <p>
        <button>Login</button>
      </p>
    </form>
  );
};
export default Login;
