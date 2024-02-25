const initalState = {
  users: [
    { name: "vinay", id: "1" },
    { name: "sai", id: "2" },
  ],
};
function userReducer(state = initalState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        users: [
          state.users.filter((user) => {
            return !(user.id === action.payload.userId);
          }),
        ],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: [...state.users],
      };

    default:
      return state;
  }
}
export default userReducer;
