import { useState } from "react";
import { useDispatch } from "react-redux";
import setUserData from "./actionsAC";
import { useNavigate } from "react-router-dom";

const LoginFormData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setUserData(formData));
    navigate("/display-data");
  };

  return (
    <div>
      <h2>Login Form Page</h2>
      <form>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={formData.address}
          placeholder="Address"
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginFormData;
