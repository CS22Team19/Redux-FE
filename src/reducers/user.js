import { LOGIN_USER } from "../actions";

const initialState = {
    currentUser: {}
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case LOGIN_USER:
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }


    //the user object action.payload is being saved to the state under key of currentUser