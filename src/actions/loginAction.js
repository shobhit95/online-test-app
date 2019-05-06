import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./constants";
import axios from "axios";

export const register = user => {
  return dispatch => {
    axios
      .post("https://javarndonlinetest.herokuapp.com/api/v1/user", user)
      .then(res => {
        return res;
      })
      .then(user => {
        dispatch({
          type: REGISTER_USER,
          isloggedIn: true,
          role: user.data.role.id,
          status: user.status
        });
      })
      .catch(err => {
        console.log("registration errror", err.status);
        dispatch({
          type: REGISTER_USER,
          status: err.status
        });
      });
  };
};

export const login = user => {
  return async dispatch => {
    axios
      .post("https://javarndonlinetest.herokuapp.com/api/v1/user/login", user)
      .then(res => {
        return res.data;
      })
      .then(data => {
        return data.token;
      })
      .then(token => {
        axios
          .get("https://javarndonlinetest.herokuapp.com/api/v1/user/", {
            headers: {
              Authorization: token
            }
          })
          .then(user => {
            dispatch({
              type: LOGIN_USER,
              isloggedIn: true,
              token: token,
              status: user.status,
              userdata: user.data,
              role: user.data.role.id //change role from API response
            });
          });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_USER,
          status: err.response.status
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER,
      isloggedIn: false
    });
  };
};
