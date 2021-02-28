import { combineReducers } from "redux";

const postNewMessage = (state = {}, action) => {
  switch (action.type) {
    case "POST_NEW_MESSAGE":
      return { ...state, newMessage: action.newMessage };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postNewMessage,
});

export default rootReducer;
