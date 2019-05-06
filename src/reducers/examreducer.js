const initState = [];

export const ExamReducer = (state = initState, action) => {
  if (action.type === "FETCH_TOPICS") {
    console.log("exam reducer action", action);
    return state;
  }

  return state;
};
