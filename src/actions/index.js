import axios from "axios";

export const PLAYER_MOVE = "PLAYER_MOVE";
export const PLAYER_MOVE_SUCCESS = "PLAYER_MOVE_SUCCESS";
export const PLAYER_MOVE_FAIL = "PLAYER_MOVE_FAIL";
export const LOGIN_USER = "LOGIN_USER";

// export const playerMove = () => dispatch => {
//   dispatch({ type: PLAYER_MOVE });
//   axios;
//   try {
//   } catch {}
// };




//this is for registering a user... but logging in will be the same thing with different name (function will be called userLoginFetch)
export const userPostFetch = user => {
  return dispatch => {
    return fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) {
        //Assuming API will return a JSON object with a key of
        // "message" if there is an error with creating the user 

        //Put code that will handle invalid creation of user

      } else {
        localStorage.setItem("token", data.jwt)
        dispatch(loginUser(data.user))
      }
    })
  }
}

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})

//assuming JSON object looks like this: (this is what we named "data in the above function")
// {
//   user: {
//     username: "ImANewUser",
//     avatar: "https://robohash.org/imanewuser.png",
//     bio: "A new user to the app."
//   },
//   jwt: "aaaaaaa.bbbbbbbb.ccccccc"
// }

