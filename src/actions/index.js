import axios from "axios";
import axiosWithAuth from  '../axios/axiosWithAuth'

export const PLAYER_MOVE = "PLAYER_MOVE";
export const PLAYER_MOVE_SUCCESS = "PLAYER_MOVE_SUCCESS";
export const PLAYER_MOVE_FAIL = "PLAYER_MOVE_FAIL";

// export const playerMove = () => dispatch => {
//   dispatch({ type: PLAYER_MOVE });
//   axios;
//   try {
//   } catch {}
// };

// export const LOGIN_USER = "LOGIN_USER";


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'


// export const playerMove = () => dispatch => {
//   dispatch({ type: PLAYER_MOVE });
//   axios;
//   try {
//   } catch {}
// };

export const userLoginFetch = values => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post("https://lambda-valley.herokuapp.com/auth/login", values)
      .then(res => {
        console.log(res); // data was created successfully and logs to console
        localStorage.setItem("token", res.data.access);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true;
      })
  };
 };



// export const userLoginFetch = payload => dispatch => {
//   dispatch({ type: LOGIN_START })
//   axiosWithAuth()
//       .post('https://lambda-valley.herokuapp.com/auth/login', payload)
//       .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
//       .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }))
// }

export const userPostFetch = payload => dispatch => {
  dispatch({ type: SIGNUP_START })
  axiosWithAuth()
      .post('https://lambda-valley.herokuapp.com/auth/register', payload)
      .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload }))
      .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }))
}











//this is for registering a user... but logging in will be the same thing with different name (function will be called userLoginFetch)
// export const userPostFetch = user => {
//   return dispatch => {
//     axios.post("https://lambda-valley.herokuapp.com/auth/register", )
//     // return fetch("https://lambda-valley.herokuapp.com/auth/register", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     Accept: "application/json"
//     //   },
//     //   body: JSON.stringify({user})
//     // })
//     .then(resp => resp.json())
//     .then(data => {
//       console.log(data)
//       if(data.message) {
//         //Assuming API will return a JSON object with a key of
//         // "message" if there is an error with creating the user 

//         //Put code that will handle invalid creation of user

//       } else {
//         localStorage.setItem("token", data.jwt)
//         dispatch(loginUser(data.user))
//       }
//     })
//   }
// }

// const loginUser = userObj => ({
//   type: LOGIN_USER,
//   payload: userObj
// })





//assuming JSON object looks like this: (this is what we named "data in the above function")

// {
//   access: 
// }

// {
//   user: {
//     username: "ImANewUser"
//   },
//   jwt: "aaaaaaa.bbbbbbbb.ccccccc"
// }




// export const userLoginFetch = user => {
//   return dispatch => {
//     return fetch("https://lambda-valley.herokuapp.com/auth/login", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({user})
//     })
//       .then(resp => resp.json())
//       .then(data => {
//         if (data.message) {
//           // Here you should have logic to handle invalid login credentials.
//           // This assumes your Rails API will return a JSON object with a key of
//           // 'message' if there is an error
//         } else {
//           localStorage.setItem("token", data.jwt)
//           dispatch(loginUser(data.user))
//         }
//       })
//   }
// }
