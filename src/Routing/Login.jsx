import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    isInvalidUser: false,
  });
  const handleClick = () => {
    if (user.username === "vinay" && user.password === "vinay") {
      console.log("Button clicked");
      props.setIsLoggedin(true);
      navigate("/posts");
    } else {
    }
  };
  const onChangeHandler = (e) => {
    const currUser = { ...user };
    currUser[e.target.name] = e.target.value;
    setUser(currUser);
  };
  return (
    <div>
      {user.isInvalidUser && <p>Please enter correct user name and password</p>}
      <p>
        User Name :{" "}
        <input
          type="text"
          name="username"
          onChange={onChangeHandler}
          value={user.username}
        />
      </p>
      <p>
        Password :{" "}
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={user.password}
        />
      </p>
      <p>
        <button onClick={handleClick}>Login</button>
      </p>
    </div>
  );
}
