import { SET_USER_DATA } from "./actions";
const setUserData = (userData) => {
  return {
    type: "SET_USER_DATA",
    payload: userData,
  };
};
export default setUserData;
