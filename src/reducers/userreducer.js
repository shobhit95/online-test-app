const initState = [];

export const UserReducer = (state = initState, action) => {
  console.log("user reducer called", action);
  if (action.type === "FETCH_USER") {
    
    const users = action.users;
    return [...state, ...users];
  }
  if (action.type === "DELETE_USER") {
    return state.filter(i => i._id !== action.id);
  }
  if (action.type === "EDIT_USER") {
    console.log("edit reducer", action);
    action.flag === "role"
      ? state.map(i => {
          if (i._id === action.id) {
            i.role.id = action.role.id;
            i.role.type = action.role.type;
          }
        })
      : state.map(i => {
          if (i._id === action.id) {
            i.status = action.status;
          }
        });

    return [...state];
    //return state.filter(i => i._id !== action.id);
  }
  return state;
};
