import { PLAYER_MOVE, PLAYER_MOVE_SUCCESS, PLAYER_MOVE_FAIL } from "../actions";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_MOVE:
      return {};
    case PLAYER_MOVE_SUCCESS:
      return {};
    case PLAYER_MOVE_FAIL:
      return {};

    default:
      return state;
  }
};

export default rootReducer;
