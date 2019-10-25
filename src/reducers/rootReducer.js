import {
  PLAYER_MOVE,
  PLAYER_MOVE_SUCCESS,
  PLAYER_MOVE_FAIL,
  // LOGIN_USER
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL

} from "../actions";

const initialState = {
  currentUser: {},
  isLogging: false,
    isLoggedIn: false,
    isRegistering: false,
    isRegistered: false,
    authToken: null,
    loginError: '',
    player: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_MOVE:
      return {};
    case PLAYER_MOVE_SUCCESS:
      return {};
    case PLAYER_MOVE_FAIL:
      return {};

    case LOGIN_START: {
        return {
            ...state,
            isLogging: true
        }
    }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            isLogging: false,
            isLoggedIn: true,
            authToken: action.payload.token,
            currentUser: action.payload,
            player: action.stuff
        }
    }
    case LOGIN_FAIL: {
        return {
            ...state,
            isLogging: false,
            loginError: action.payload
        }
    }
    case SIGNUP_START: {
        return {
            ...state,
            isRegistering: true
        }
    }
    case SIGNUP_SUCCESS: {
        return {
            ...state,
            isRegistering: false,
            currentUser: action.payload

        }
    }
    case SIGNUP_FAIL: {

    }
    default:
      return state;
  }
};

//the user object action.payload is being saved to the state under key of currentUser

export default rootReducer;
