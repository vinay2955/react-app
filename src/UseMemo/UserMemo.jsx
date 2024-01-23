import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

export default function UserMemo() {
  const [users, setUsers] = useState([]);
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  const getPhoneDetails = useMemo(() => {
    console.log("phone");
    const userPhone = users.filter((user) => {
      return user.phone === phone;
    });
    return userPhone;
  }, [phone]);
  const getCityDetails = useMemo(() => {
    console.log("city");
    const userCity = users.filter((user) => {
      return user.address.city === city;
    });
    return userCity;
  }, [city]);
  const getUserNameDetails = useMemo(() => {
    console.log("username");
    const userUserName = users.filter((user) => {
      return user.username === username;
    });
    return userUserName;
  }, [username]);
  return (
    <div>
      <p>
        Enter Phone Number:
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        ></input>
        <p>Users phone number</p>
        {phone &&
          getPhoneDetails &&
          getPhoneDetails.length > 0 &&
          getPhoneDetails.map((user) => <p>{`Name:${user.name}`}</p>)}
      </p>
      <p>
        Enter city :
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        ></input>
        <p>Users city</p>
        {city &&
          getCityDetails &&
          getCityDetails.length > 0 &&
          getCityDetails.map((user) => <p>{`Name:${user.name}`}</p>)}
      </p>
      <p>
        Enter UserName:
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <p>Users Username</p>
        {username &&
          getUserNameDetails &&
          getUserNameDetails.length > 0 &&
          getUserNameDetails.map((user) => <p>{`Name:${user.name}`}</p>)}
      </p>
      {/* Users: */}
      {/* {users &&
        users.map((user) => (
          <div>
            PhoneNum:<p>{user.phone}</p>
            Name:<p>{user.name}</p>
            City:<p>{user.address.city}</p>
            username:<p>{user.username}</p>
          </div>
        ))} */}
    </div>
  );
}
