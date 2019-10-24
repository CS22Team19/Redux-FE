import {
  PLAYER_MOVE,
  PLAYER_MOVE_SUCCESS,
  PLAYER_MOVE_FAIL,
  LOGIN_USER
} from "../actions";

const initialState = {
  currentUser: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_MOVE:
      return {};
    case PLAYER_MOVE_SUCCESS:
      return {};
    case PLAYER_MOVE_FAIL:
      return {};
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

//the user object action.payload is being saved to the state under key of currentUser

export default rootReducer;
