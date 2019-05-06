import { combineReducers } from "redux";
import { LoginReducer } from "../reducers/loginreducer";
import { ExamReducer } from "../reducers/examreducer";
import { UserReducer } from "./userreducer";

const rootReducer = combineReducers({
  loginreducer: LoginReducer,
  examreducer: ExamReducer,
  userreducer: UserReducer
});

export default rootReducer;
