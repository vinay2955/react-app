import { UPDATE_USER } from "./actions";
function updateUser(id) {
  return {
    type: UPDATE_USER,
    payload: { userId: id },
  };
}
export default updateUser;
