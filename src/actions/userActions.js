import { FETCH_USER, DELETE_USER, EDIT_USER } from "./constants";
import axios from "axios";

export const fetchUser = token => {
  return dispatch => {
    axios
      .get("https://javarndonlinetest.herokuapp.com/api/v1/user/users", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        //console.log("res in user action", res);
        return res;
      })
      .then(user => {
        dispatch({
          type: FETCH_USER,
          users: user.data,
          status: user.status
        });
      })
      .catch(err => {
        // console.log("fetch user error", err);
        dispatch({
          type: FETCH_USER,
          status: err.status
        });
      });
  };
};

export const deleteuser = (id, token) => {
  //console.log(id);
  return dispatch => {
    axios
      .delete(
        "https://javarndonlinetest.herokuapp.com/api/v1/user/delete/" + id,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(res => {
        //console.log("res in delete action", res);
        return res;
      })
      .then(response => {
        dispatch({
          type: DELETE_USER,
          status: response.status,
          id: id
        });
      })
      .catch(err => {
        console.log("delete user error", err);
        dispatch({
          type: FETCH_USER,
          status: err.status
        });
      });
  };
};

export const editProduct = (id, role, status, token) => {
  var type = "";
  if (role === "1") {
    type = "admin";
  }
  if (role === "2") {
    type = "trainer";
  }
  if (role === "3") {
    type = "trainee";
  }
  const updatedrole = { role: { id: role, type: type } };
  const updatedstatus = { status: status };
  //console.log("role", updatedrole);
  return dispatch => {
    axios
      .put(
        "https://javarndonlinetest.herokuapp.com/api/v1/user/role/" + id,
        updatedrole,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(res => {
        console.log("res in edit action", res);
        return res;
      })
      .then(response => {
        dispatch({
          type: EDIT_USER,
          status: response.status,
          role: response.data.role,
          id: response.data._id,
          flag: "role"
        });
      })
      .then(
        axios
          .put(
            "https://javarndonlinetest.herokuapp.com/api/v1/user/status/" + id,
            updatedstatus,
            {
              headers: {
                Authorization: token
              }
            }
          )
          .then(res => {
            console.log("res in edit action status change", res);
            return res;
          })
          .then(response => {
            dispatch({
              type: EDIT_USER,
              status: response.data.status,
              id: response.data._id,
              flag: "status"
            });
          })
      )
      .catch(err => {
        console.log("edit user error", err);
        dispatch({
          type: EDIT_USER,
          status: err.status
        });
      });
  };
};
