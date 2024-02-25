import { GET_USERS } from "./actions";
import axios from "axios";
function getUsers() {
  return {
    type: GET_USERS,
    payload: data,
  };
}
