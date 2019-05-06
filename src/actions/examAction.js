import { FETCH_TOPICS } from "./constants";
import axios from "axios";

export const fetchTopics = token => {
  console.log("inside fetc topics action :", token);
  return dispatch => {
    axios
      .get("https://javarndonlinetest.herokuapp.com/api/v1/questionbank", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .then(user => {
        dispatch({
          type: FETCH_TOPICS,
          users: user.data,
          status: user.status
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_TOPICS,
          status: err.status
        });
      });
  };
};
