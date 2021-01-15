import * as types from "./types";

export const TodoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ALL_TODOS_SUCCESS:
      return { ...state, allTodo: action.payload };

    default:
      return state;
  }
};
