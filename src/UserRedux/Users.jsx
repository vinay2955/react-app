import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addUser from "./addUserAC";
import deleteUser from "./deleteUserAC";
import displayProducts from "./displayProductsAC";

function Users() {
  const state = useSelector((state) => {
    //mapstatetoprops ->
    // explain
    return state.userReducer;
  });
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  return (
    <div>
      <div style={{ border: "solid 2px", padding: "5px" }}>
        <b>User List</b>
        {state &&
          state.users &&
          state.users.map((user) => {
            return (
              <div
                style={{ border: "solid 1px", padding: "5px", margin: "5px" }}
              >
                <p>Name:{user.name}</p>
                <p>ID:{user.id}</p>
              </div>
            );
          })}
      </div>
      <div style={{ border: "solid 2px", padding: "5px", margin: "15px" }}>
        <b>AddUser</b>
        <table>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={id}
                placeholder="enter id"
                onChange={(e) => setId(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => dispatch(addUser({ name, id }))}>
                <b>AddUser</b>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ border: "solid 2px", padding: "5px", margin: "15px" }}>
        <b>Delete User</b>
        <table>
          <tr>
            <td>
              <input
                type="type"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="enetr Id"
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => dispatch(deleteUser(id))}>
                <b>Delete User</b>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Users;
