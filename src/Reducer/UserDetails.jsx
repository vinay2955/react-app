import React, { useReducer } from "react";
import axios from "axios";
export default function UserDetails() {
  const getUserDetails = (state, action) => {
    switch (action.type) {
      case "getUser":
        return { ...state, users: action.payload };
    }
  };
  const userApiCall = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      dispatch({ type: "getUser", payload: response.data });
    });
  };
  const [userDetail, dispatch] = useReducer(getUserDetails, { users: [] });
  return (
    <div>
      <p>
        User Name:
        {userDetail.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </p>
      <button onClick={userApiCall}>get user details</button>
    </div>
  );
}
