const initState = { isLoggedIn: false, role: "", token: "", data: {} };

export const LoginReducer = (state = initState, action) => {
  if (action.type === "REGISTER_USER") {
   
    state.isLoggedIn = action.isloggedIn;
    state.role = action.role;
    return { ...state };
  }

  if (action.type === "LOGIN_USER") {
   
    state.isLoggedIn = action.isloggedIn;
    state.role = action.role;
    state.token = action.token;
    state.data = action.userdata;
    return { ...state };
  }
  if (action.type === "LOGOUT_USER") {
  
    state.isLoggedIn = action.isloggedIn;
    state.role = "";

    return { ...state };
  }

  return state;
};
