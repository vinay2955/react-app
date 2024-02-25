import React from "react";
import { useSelector } from "react-redux";
const DisplayDataPage = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div>
      <h1>DisplayPage</h1>
      <p>FirstName:{userData.firstName}</p>
      <p>LastName:{userData.lastName}</p>
      <p>Email:{userData.email}</p>
      <p>Address:{userData.address}</p>
    </div>
  );
};
export default DisplayDataPage;
