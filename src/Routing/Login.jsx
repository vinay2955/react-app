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
      props.setIsLoggedin(true);
      navigate("/posts");
      //cookies
      const now = new Date();
      const time = now.getTime() + 1 * 60 * 100;
      console.log("cookies clicked");
      now.setTime(time);
      // document.cookie = "isLoggedin=true;expires=" + now.toUTCString();

      //local storage
      localStorage.setItem("isLoggedin", "true");

      //session storage
      // const now = new Date();
      // const time = now.getTime() + 1 * 60 * 1000;
      // const login = { isLoggedin: true, expiry: time };
      // sessionStorage.setItem("login", JSON.stringify(login));

      //use location working
      navigate("/posts?token=123456", { state: { username: user.username } });
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
